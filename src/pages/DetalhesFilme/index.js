import { View, Text } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";


export default function DetalhesFilmePage({ route }){

  const { filme } = route.params;
   return(

    <View style={styles.container}>
      <Text> Detalhes do filme </Text>  
      <Text> { filme.titulo }</Text>
      <Text> { filme.sinopse }</Text>
      <Link to={{screen: 'Dashboard'}} style={styles.link}>Voltar</Link>

    </View>
   ) 
}