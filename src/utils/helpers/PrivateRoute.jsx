import React, { Fragment, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { isUserAuthenticated } from '.';

const PrivateRoute = ({component}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.app.token)
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated(dispatch))
    // eslint-disable-next-line
  }, [auth])

  if(isAuthenticated === null){
    return <>error</>
  }

  return (
    !isAuthenticated ? (
        <Navigate to='/login'/>
      ) : (
        <Fragment>
            {component}
        </Fragment>
      )
  );
};

export default PrivateRoute;