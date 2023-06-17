import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#606c38',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    opcoes:{
        marginTop: '30px',
        flexDirection: 'row',
        columnGap: '20px',
        width: '40%'
    },
    
    btnopcao:{
        borderRadius: '10px',
        border: '2px solid black',
        height: '50px',
        width: '100%',
        textAlign: 'center',
        fontSize: '20px',
        backgroundColor: 'white',
        
    },
    titulo:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '40px'
    }
})

export default styles;