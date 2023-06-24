import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./style";
import { useAuth } from "../../contexts/AuthContext";


export default function Login(){

    const { signIn } = useAuth();

    return(
        <View style={styles.container}>
            <Image style={styles.imglogo} source={require('../../assets/imgs/logo.png')}/>
            
            <Text style={styles.txt}>Email ou nome de usuário: </Text>
            <TextInput placeholder="email ou usuario" style={styles.input}/>

            <Text style={styles.txt}> Senha:</Text>
            <TextInput placeholder="senha" style={styles.input}/>
            
            <TouchableOpacity style={styles.btnClick} onPress={() => signIn()}> 
                <Text> Fazer Login </Text>
            </TouchableOpacity>
            <Link style={styles.links} to={{ screen: 'ForgotPassword'}}> Esqueceu a senha?</Link>
            <Link style={styles.links} to={{ screen: 'Cadastro'}}> Fazer Registro</Link>

           
        </View>
    )
}