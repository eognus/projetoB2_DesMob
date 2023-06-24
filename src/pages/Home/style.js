import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#606c38',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    opcoes:{
        marginTop: '30px',
        flexDirection: 'row',
        columnGap: '20px',
        width: '90%',
        justifyContent: 'center'
    },
    
    btnopcao:{
        borderRadius: '10px',
        border: '2px solid black',
        height: '50px',
        width: '40%',
        textAlign: 'center',
        fontSize: '20px',
        backgroundColor: 'white',
        
    },
    titulo:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '40px',
        width: '80%',
        textAlign: 'center'
    }
})

export default styles;
