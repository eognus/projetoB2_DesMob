import { ScrollView, ActivityIndicator } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import styles from "./style";
import CartaoFilme from "../../components/CartaoFilme";

export default function DashboardPage(){

    let [ filmes, setFilmes ] = useState([]);

    const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';
    useEffect(function(){
      fetch(baseUrl).then( resultado => resultado.json()
       ).then( objeto => {setFilmes(objeto.data); console.log(objeto)})
    }, [])


    return(
        
        <ScrollView contentContainerStyle={styles.container}>
      {filmes.length > 0 ?
      filmes.map(filme =><CartaoFilme key={filme.id} filme={filme.attributes} />) 

      : <ActivityIndicator size={'large'} />}

      <StatusBar style="auto" />
    </ScrollView>
    )
}