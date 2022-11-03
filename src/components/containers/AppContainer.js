import * as React from 'react';
import Box from '@mui/material/Box';
import ResetCSS from '../../assets/css/style';
import GlobalStyle from './containers';
import "../../assets/css/app.css"
import AppMenu from '../common/AppMenu';

const AppContainer = () => {

    return ( 
      <Box>
          <ResetCSS/>
          <GlobalStyle/> 
          <AppMenu />

          {/* <AppNavbar />

          <Container>
            <UserPage/>
          </Container> */}
      </Box> 
     );
}
 
export default AppContainer;