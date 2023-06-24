import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'gray'
    },

    imglogo:{
        height: '150px',
        width: '150px'
    },

    txt: {
        fontWeight: 'bold'
    },

    btnClick:{
        borderRadius: '10px',
        border: '2px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '80%',
        height: '30px',
        width: '70%',
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
        height: '50px',
        marginBottom: '10px'
    },
    links:{
        fontWeight: 'bold',
        textDecorationStyle: 'dashed',
    },
    input:{
        border: '1px solid black',
        width: '70%',
        height: '40px',
        padding: '5px',
        marginBottom: '10px',
        backgroundColor: 'white'
    }    
})

export default styles;