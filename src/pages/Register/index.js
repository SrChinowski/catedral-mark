import GlobalStyle from '../../app.styles';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import LoginWrapper, { Card, LoginLayout, Separator} from './register.style';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, CircularProgress, createTheme, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { post_user_register } from '../../redux/ducks/app_d';
import CustomAlert from '../../components/common/utils/CustomAlert';
import useDuck from '../../utils/hooks/useDuck';
import { useDispatch } from 'react-redux';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Alert } from '@mui/material';
import { isUserAuthenticated } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#283891',
    },
    secondary: {
      main: '#E8207A',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  shape: {
    borderRadius: 12,
  },
});

const AppRegister = () => {
    const dispatch = useDispatch();

    //Data States
    const [values, setValues] = useState({
        name : '',
        username : '',
        email: '',
        password: '',
        confirm: '',
    });

    //REDUX DATA
    const auth = useSelector(state => state.app.token)
	const alertInitialState = { display: false, type: '', msg: '' };
    
    const [alert, setAlert] = useState(alertInitialState);


	const validateUserInfo = values.name === '' || 
        values.username === '' || 
        values.email === '' || 
        values.password === '' || 
        values.confirm === '';

    //Ducks
    const loginFetch = useDuck({reducer: 'app', status: 'CREATE_USER'})

    //Helpers
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const createUser = () => {
		if (validateUserInfo) {
			setAlert({ display: true, type: 'danger', msg: 'Campos faltantes!' });
			return;
		}
		setAlert(alertInitialState);

		dispatch(post_user_register(values, true));
	}

    //Fetchers
    const onSubmit = () => { createUser() };

    //useEffects
    useEffect(() => {isUserAuthenticated(dispatch) && window.location.replace('/app')}, [auth])// eslint-disable-line



    return ( 
        <ThemeProvider theme={themeOptions}>
        <LoginWrapper>
            <GlobalStyle />
            <ValidatorForm onSubmit={onSubmit}>

            <LoginLayout>
                <Card style={{height: "fit-content"}}>
                    <Heading content={'Hola'} style={{fontWeight: '700', marginBottom: '5px'}}/>
                    <Text content={'Crea una cuenta y comienza a investigar 👋'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                    <Separator/>
                    {alert.display &&
                        <CustomAlert type={alert.type} msg={alert.msg} />
                    }
                    <TextValidator
                            label="Nombre" fullWidth
                            onChange={handleChange('name')}
                            name="name"
                            value={values.name}
                            disabled={loginFetch.isFetching(() => {})}
                            validators={['required']}
                            errorMessages={['Campo obligatorio'
                        ]}
                        />
                        <Separator/>
                    <TextValidator
                            label="Usuario" fullWidth
                            onChange={handleChange('username')}
                            name="username"
                            value={values.username}
                            disabled={loginFetch.isFetching(() => {})}
                            validators={['required']}
                            errorMessages={['Campo obligatorio', 'Correo no valido']}
                        />
                    <Separator/>
                    <TextValidator
                            label="Correo" fullWidth
                            onChange={handleChange('email')}
                            name="email"
                            value={values.email}
                            disabled={loginFetch.isFetching(() => {})}
                            validators={['required']}
                            errorMessages={['Campo obligatorio', 'Correo no valido']}
                        />
                        <Separator/>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            size='medium'
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Contraseña"
                        />
                    </FormControl>
                    <Separator/>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Confirmar Contraseña</InputLabel>
                        <OutlinedInput
                            size='medium'
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirm}
                            onChange={handleChange('confirm')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirmar Contraseña"
                        />
                    </FormControl>

                    <Separator/>
                    <Button 
                            variant="contained" color='primary' 
                            size='large' type="submit" disabled={loginFetch.isFetching(() => {})}
                            style={{width: '90%', alignSelf: 'center'}}
                        >
                                {loginFetch.isFetching(() => {}) ? <CircularProgress /> : "Crear cuenta"}
                        </Button>
                        {
                            loginFetch.isFailed(() => {}) && (
                                <Alert severity="error" style={{ marginTop: '15px'}}>
                                    {String(loginFetch.getErrors())}
                                </Alert> 
                            )
                        }
                    <Separator/>
                    <div  style={{alignSelf: 'center', display: 'flex'}}>
                        <Text content={'Ya tienes cuenta? '} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                        <Link to="/login"> <b style={{color: themeOptions.palette.primary.main, cursor: 'pointer', marginLeft: '5px'}}>Inicia Sesion</b></Link>
                    </div>
                </Card>
            </LoginLayout>
            </ValidatorForm> 

        </LoginWrapper>

        </ThemeProvider>
     );
}
 
export default AppRegister;