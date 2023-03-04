import { Write } from "./write";

const SET_VALUE = 'APP/SET_VALUE';
const App = Write({ reducer : 'app'})

export default function Status({
    reducer, status, cleanAfterSuccessResult = true,
    cleanAfterFailedResult = false
}) {
    const StatusCreator = (statusBase) => {
        const PREFIX = reducer.toUpperCase();
        const getPrefix = () => PREFIX;
        const getFetching = () => `${PREFIX}/${statusBase}_FETCHING`;
        const getSuccess = () => `${PREFIX}/${statusBase}_SUCCESS`;
        const getFailed = () => `${PREFIX}/${statusBase}_ERROR`;
        const getThreesome = () => ({
            fetchStatus: getFetching(),
            successStatus: getSuccess(),
            failedStatus: getFailed(),
        });

        return {
            getPrefix, getFetching, getSuccess,
            getFailed, getThreesome,
        };
    }

    const getUniquesValues = (props) => {
        // console.log(props)
        const {
            statusList, status, statusAction = 'push',
            errorList = {}, error = '', errorAction = 'push',
            errorValue,
        } = props;
        let newStatuses = [...statusList];
        let newErrors = { ...errorList };

        if (!statusList.includes(status) && statusAction === 'push')
            newStatuses.push(status);

        if (statusList.includes(status) && statusAction === 'remove')
            newStatuses = newStatuses.filter((s) => s !== status);

        if (error && !errorList.hasOwnProperty(error) && errorAction === 'push')
            newErrors = { ...newErrors, [error]: errorValue };

        if (error && errorList.hasOwnProperty(error) && errorAction === 'remove')
            delete newErrors[`${error}`]; //eslint-disable-line

        if (error) return { statuses: newStatuses, errors: newErrors };
        return { statuses: newStatuses };
    };

    const setStatus = (statuses, errors) => (dispatch, getState) => {
        const { statuses: s } = getState().app;
        if (errors) 
            return dispatch(App.setValue('', {
                statuses: statuses || s,
                errors: errors
            },'root'))
        return dispatch(App.setValue('', {
            statuses: statuses,
            errors: ""
        },'root'))
    };

    const clear = (status) => (dispatch, getState) => {
        const { statuses } = getState().app;
        const { fetchStatus, successStatus, failedStatus } = StatusCreator(status).getThreesome();

        const updatedStatuses = statuses.filter((s) => {
            let is = true;
            if (s === fetchStatus) is = false;
            if (s === successStatus) is = false;
            if (s === failedStatus) is = false;
            return is;
        });
        return dispatch({ type: SET_VALUE, payload: updatedStatuses });
    };

    const startFetch = () => (dispatch, getState) => {
        const { statuses } = getState().app;
        const createdFetchingStatus = StatusCreator(status).getFetching();

        if (!statuses.includes(createdFetchingStatus))
            return dispatch(setStatus([...statuses, createdFetchingStatus]));
    };

    const stopFetch = (success = true, options) => (dispatch, getState) => {
        const { statuses, errors } = getState().app;
        const { fetchStatus, successStatus, failedStatus } = StatusCreator(status).getThreesome();
        // console.log(failedStatus)
        const { statuses: newStatuses, errors: newErrors } = getUniquesValues({
            statusList: statuses.filter((s) => s !== fetchStatus),
            status: success ? successStatus : failedStatus,
            errorList: errors,
            error: options?.error ? failedStatus : undefined, //eslint-disable-line
            errorValue: options?.error,
        });
        dispatch(setStatus(newStatuses, newErrors));
        if (cleanAfterSuccessResult && success) return dispatch(clear(status));
        if (cleanAfterFailedResult && !success) return dispatch(clear(status));

        return true;
    };

    const getErrors = () => (dispatch, getState) => {
        const { errors } = getState().app;
        const errorKey = StatusCreator(status).getFailed();
        if (errors[errorKey]) {
            return errors[errorKey];
        }
        return {};
    };

    return {
        StatusCreator,
        setStatus,
        startFetch,
        stopFetch,
        clear,
        getErrors,
    };
}