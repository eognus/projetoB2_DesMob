import { Link } from "@react-navigation/native";
import { View } from "react-native";


export default function CadastroPage(){

   return(
    <View>
        <Link to={{screen: 'Dashboard'}}>Cadastrar</Link>
    </View>
   ) 
}