import { Link } from "@react-navigation/native";
import { View } from "react-native";


export default function LoginPage(){

   return(
    <View>
        <Link to={{screen: 'Dashboard'}}>Logar</Link>
    </View>
   ) 
}