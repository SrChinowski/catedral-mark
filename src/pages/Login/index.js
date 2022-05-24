import GlobalStyle from '../../app.styles';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import LoginWrapper, { Card, LoginLayout, Separator} from './login.style';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    createTheme,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    InputAdornment
} from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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

const AppLogin = () => {

    const [values, setValues] = useState({
        mail: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    return ( 
        <ThemeProvider theme={themeOptions}>
            <LoginWrapper>
            <GlobalStyle />
            <LoginLayout>
                <Card >
                    <Heading content={'Hola'} style={{fontWeight: '700', marginBottom: '5px'}}/>
                    <Text content={'Es bueno verte de nuevo 👋'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                    <Separator/>
                    <TextField 
                        label="Correo" 
                        variant="outlined" fullWidth 
                        type={'email'} size='medium'
                        onChange={handleChange('mail')}
                        value={values.mail}
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
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Recuérdame" />
                        <Button variant="text">Olvidé la contraseña </Button>
                    </div>
                    <Separator/>
                    <Button variant="contained" color='primary' size='large' style={{width: '90%', alignSelf: 'center'}}>Iniciar Sesión</Button>
                    <Separator/>
                    <div  style={{alignSelf: 'center', display: 'flex'}}>
                        <Text content={'¿No tienes una cuenta?'} style={{color: 'rgba(14, 14, 23, 0.7)'}}/>
                        <b style={{color: themeOptions.palette.primary.main, cursor: 'pointer', marginLeft: '5px'}}>Registrate</b>
                    </div>
                </Card>
            </LoginLayout>
        </LoginWrapper>
        </ThemeProvider>
     );
}
 
export default AppLogin;