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
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/helpers/PrivateRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={STORE}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/register" element={<AppRegister />} />
        <Route path="/app" element={
          <PrivateRoute component={<Dashboard/>} />
        } /> 
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
