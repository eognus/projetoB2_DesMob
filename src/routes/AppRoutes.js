import { createStackNavigator } from "@react-navigation/stack"

import DashboardPage from "../pages/DashboardPage";
import DetalhesFilmePage from "../pages/DetalhesFilme";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={DashboardPage} />
            <Stack.Screen name="DetalhesFilme" component={DetalhesFilmePage} />
        </Stack.Navigator>
    )
}
