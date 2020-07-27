import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../contexts/auth';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';
import AppRoutesDrawer from '../routes/app.routes.drawer';


export default function Routes() {

  const { signed } = useContext(AuthContext);

 return (

    signed ? <AppRoutesDrawer/> : <AuthRoutes/>

  );
}