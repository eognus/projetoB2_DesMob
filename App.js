import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroPage from './src/pages/CadastroPage';
import DashboardPage from './src/pages/DashboardPage';
import DetalhesFilmePage from './src/pages/DetalhesFilme';
import HomePage from './src/pages/Home';
import LoginPage from './src/pages/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Cadastro" component={CadastroPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="DetalhesFilme" component={DetalhesFilmePage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
