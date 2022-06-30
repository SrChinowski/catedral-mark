import jwtDecode from 'jwt-decode';
import { Write } from '../write';

export const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
};

export const isUserAuthenticated = (dispatch) => {
    let token = localStorage.getItem('catedralToken')
    
    const App = Write({ reducer : 'app'})
    const User = Write({ reducer : 'user'})

    if(token){
        let tokenExpiration = jwtDecode(token).exp;
        let dateNow = new Date();

        if(tokenExpiration < dateNow.getTime()/1000){
            return(false)
        }else{
            const {user} = parseJwt(token);

            dispatch(App.setValue('', {
                token: token
            }, 'root'))

            dispatch(User.setValue('', {
                username: user.username,
                role: user.role,
                name: user.name,
                email: user.email,
                firstTime: user.firstTime,
                id: user._id
            },'root'))

            return(true)
        }
    } else {
       return(false)
    }
}