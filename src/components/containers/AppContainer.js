import * as React from 'react';
import Box from '@mui/material/Box';
import ResetCSS from '../../assets/css/style';
import GlobalStyle from './containers';
import "../../assets/css/app.css"
import AppMenu from '../common/AppMenu';

const AppContainer = ({component}, page) => {

    return ( 
      <Box>
          <ResetCSS/>
          <GlobalStyle/> 
          <AppMenu component={component} page={page}/> 
      </Box> 
     );
}
 
export default AppContainer;