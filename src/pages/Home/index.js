import { Link } from "@react-navigation/native";
import { View } from "react-native";


export default function HomePage(){

   return(
    <View>
        <Link to={{screen: 'Cadastro'}}>Cadastrar</Link>
        <Link to={{screen: 'Login'}}>Login</Link>
    </View>
   ) 
}