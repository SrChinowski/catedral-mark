import * as React from 'react';
import Box from '@mui/material/Box';
import ResetCSS from '../../assets/css/style';
import GlobalStyle from './containers';
import "../../assets/css/app.css"
import AppMenu from '../common/AppMenu';
import Search from '../../pages/Search';
import { useSelector } from 'react-redux';
import { findUserAction } from '../../utils/helpers';
import { useEffect } from 'react';

const AppContainer = ({component, page, action = "common"}) => {

    const user_info = useSelector(state => state.user)

    useEffect(() => {
        console.log(user_info.role.actions, action, page)
    }, [])

    return ( 
      <Box>
          <ResetCSS/>
          <GlobalStyle/> 
          {
            action !== "common" && findUserAction(user_info.role.actions || [], action || []) ? 
                <AppMenu component={component} page={page}/> : 
            action === "common" || action === undefined?
                <AppMenu component={component} page={page}/> : 
            <AppMenu component={<Search />} page={"Buscador"}/> 
          }
      </Box> 
     );
}
 
export default AppContainer;