import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    menuButton:{
        paddingLeft: 15
    },
    headerStyle:{
        backgroundColor: '#333'
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color:'#fff'
    },
});