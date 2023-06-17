import { Link } from "@react-navigation/native";
import { View } from "react-native";
import { ScrollView } from "react-native";


export default function DashboardPage(){

   return(
    <ScrollView>
      <Link to={{screen: 'DetalhesFilme'}}>Detalhes</Link>
    </ScrollView>
   ) 
}