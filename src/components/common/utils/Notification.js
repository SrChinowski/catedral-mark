import { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { close_notification } from '../../../redux/ducks/app_d';

const Notification = () => {

    const dispatch = useDispatch()
    const closeNotification = () => dispatch(close_notification());
    
    const {show , title, body } = useSelector(state => state.app.notification)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(close_notification());
          }, 2500);

        return () => clearTimeout(timer);
    }, []) //eslint-disable-line

    
    return ( 
        <ToastContainer
            className="p-3"
            position={"top-end"}
            style={{ zIndex: 1 }}
        >
            <Toast show={show} onClose={closeNotification}>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>
                    {body}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
 
export default Notification;