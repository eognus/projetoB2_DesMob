import { createStackNavigator } from '@react-navigation/stack';

import CadastroPage from '../pages/CadastroPage';
import LoginPage from '../pages/LoginPage';
import ForgotPassword from '../pages/ForgotPassword';
import HomePage from "../pages/Home";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        
        <Stack.Screen name="Cadastro" component={CadastroPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
  );
}