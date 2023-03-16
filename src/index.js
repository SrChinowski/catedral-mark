import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppLogin from './pages/Login';
import AppRegister from './pages/Register';
import { Provider } from 'react-redux';
import STORE from './redux/store';
import PrivateRoute from './utils/helpers/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './components/containers/AppContainer';
// import UserPage from "./pages/User"
import Search from './pages/Search';
import ItemUpdate from './components/common/Item/ItemUpdate';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={STORE}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/register" element={<AppRegister />} />
        <Route path="/app" element={
          <PrivateRoute component={<AppContainer component={<Search />} page={"Buscador"} action={"common"}/>} /> 
        } /> 

			  <Route path='/item/:item_id/update' element={ 
          <PrivateRoute component={<AppContainer component={<ItemUpdate/> } page={"item update"} action={"common"}/>} />
        } exact />

      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
