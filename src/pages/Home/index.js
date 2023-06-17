import { Link } from "@react-navigation/native";
import { View, Text } from "react-native";
import styles from "./style";


export default function HomePage(){

   return(
    <View style={styles.container}>
        <Text style={styles.titulo}> Escolha uma opção para logar na página </Text>
        <View style={styles.opcoes}>
            <Link style={styles.btnopcao} to={{screen: 'Cadastro'}}>Cadastro</Link>
            <Link style={styles.btnopcao} to={{screen: 'Login'}}>Login</Link>
        </View>
    </View>
   ) 
}
