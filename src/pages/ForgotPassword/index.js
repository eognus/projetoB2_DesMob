import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";


export default function ForgotPassword(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imglogo}/>
          
            <Text style={styles.txt}>Digite seu email: </Text>
            <TextInput placeholder="email" style={styles.input}/>

            <TouchableOpacity style={styles.btnClick}> 
                <Text> Recuperar Senha </Text>
            </TouchableOpacity>
            
            <Link to={{ screen: 'Login' }} style={styles.links}>Voltar para login</Link>
        </View>
    )
}