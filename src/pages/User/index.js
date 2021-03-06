import MaterialTable from 'material-table';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Alert, Card, Snackbar } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/constants/common';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/ducks/app_d';
import useDuck from '../../utils/hooks/useDuck';

const usersColumns = [
    { title: 'Nombre', field: 'name' },
    { title: 'Usuario', field: 'username' },
    { title: 'Correo', field: 'email' },
    { title: 'Rol', field: 'role' },
    { title: 'Creado en', field: 'createdAt', type: "date",
    dateSetting: { locale: "es-MX" },},
]
  
const UserPage = () => {
  const dispatch = useDispatch()

  const usersListFetch = useDuck({reducer: 'app', status: 'GET_USERS_ALL'})

  //REDUX DATA
  const users_list = useSelector(state => state.app.users_list)

  useEffect(() => {
    dispatch(getAllUsers());
  },[])

    return ( 
        <Card style={{marginTop: '15px', height: '85vh', padding: '15px'}}>
            <Typography variant="h6">
              Usuarios
            </Typography>
            <Typography variant="p" gutterBottom>
              gestiona tus usuarios
            </Typography>
            <hr/>
            <ThemeProvider theme={theme}>
              <MaterialTable
                title={'Usuarios Registrados'}
                isLoading={usersListFetch.isFetching(() => {})}
                columns={usersColumns}
                data={users_list}
              />
            </ThemeProvider>
            <Snackbar open={usersListFetch.isFailed(() => {})} autoHideDuration={3000} >
              <Alert severity="error">
                {usersListFetch.getErrors()}
              </Alert>
            </Snackbar>
        </Card> 
     );
}
 
export default UserPage;