import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

export default function CartaoFilme({ filme }){

    const baseUrl = 'https://api.otaviolube.com';
    const imgUrl =  baseUrl + filme.poster.data.attributes.url ;
    return(
        <View style={styles.viewCartao}>
            <Image resizeMode="contain" style={styles.imgFilme} source={{ uri: imgUrl } }/>
            <View style={styles.descricao}>
                <Text style={styles.txtTitulo}>{filme.titulo}</Text>
                <Text >{filme.sinopse}</Text>
                <Link to={{screen: 'DetalhesFilme', params: {filme : filme} }} style={styles.btncomprar}> Comprar </Link>
            </View>
        </View>
    )
}