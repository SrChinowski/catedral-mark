import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import ResetCSS from '../../assets/css/style';
import GlobalStyle from './containers';
import "../../assets/css/app.css"
import AppNavbar from '../common/AppNavbar';
import Container from './Container';
import UserPage from '../../pages/User';

const AppContainer = () => {

    return ( 
      <Box>
          <ResetCSS/>
          <GlobalStyle/> 
          <AppNavbar />

          <Container>
            <UserPage/>
          </Container>
      </Box> 
     );
}
 
export default AppContainer;