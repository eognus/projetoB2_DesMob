import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "@react-navigation/native";

export default function Cadastro(){

    const {signIn} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            
            <Image style={styles.imglogo} source={require('../../assets/imgs/logo.png')}/>

            <Text style={styles.txt}>Escolha o seu nome de usuário: </Text>
            <TextInput placeholder="usuário" style={styles.input}/>
        
            <Text style={styles.txt}> Email:</Text>
            <TextInput placeholder="email" style={styles.input}/>
            
            <Text style={styles.txt}> Senha: </Text>
            <TextInput placeholder="senha" style={styles.input}/>
            
            <TouchableOpacity style={styles.btnClick} onPress={() => signIn()} > 
                <Text>Cadastrar </Text>
            </TouchableOpacity>
            
            <Link style={styles.links} to={{ screen: 'Login'}}> Já tenho login</Link>

           
        </View>
    )
}