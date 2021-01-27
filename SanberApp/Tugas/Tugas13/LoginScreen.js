import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';


export default class App extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('./images/logo(1).png')} style={{width:375, height:116}} />
                    <Text style={styles.loginText}>Login</Text>
                </View>
                
                <View style={styles.body}>
                    <View style={styles.input}>
                        <Text style={styles.text}>Username / Email</Text>
                        <View style={styles.boxInput}>
                            <TextInput
                                placeholder='username/email'
                                placeholderTextColor='grey'
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.boxInput}>
                            <TextInput
                                placeholder='password'
                                placeholderTextColor='grey'
                                secureTextEntry
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.end}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText}>Masuk</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:24, color:'#3EC6FF', margin:10}}>atau</Text>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Daftar ?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    logo:{
        //flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center' ,
        marginTop: 63
    },
    loginText:{
        margin: 30,
        textAlign:'center',
        fontSize:24,
        color: '#003366'
    },
    text:{
        marginLeft:5,
        fontSize:16,
        color: '#003366'        
    },
    body:{
        //flexDirection:'row',
        //justifyContent: 'center',
        alignItems: 'center',
        //padding: 48,
        //margin:10,
    },
    input:{
        margin:2,
    },
    boxInput:{        
        width:294,
        height:48,
        borderWidth:1,
        borderColor:'#777',
        margin:5,
    },
    textInput:{
        height:48,
        //marginLeft:5,
        paddingLeft:5,
        //color:'red', 
        textTransform:'lowercase',
    },
    end:{
        margin:20,
        //flexDirection:'row',
        alignItems:'center',
        //justifyContent:'space-around',
        //justifyContent:'space-evenly',
        //alignItems:'stretch',
    },
    button1:{
        width:140,
        height:40,
        //borderWidth:1,
        //borderColor:'#777',
        backgroundColor: '#3EC6FF',
        margin:5,        
        color:'white',      
        borderRadius:16,
    },
    button2:{
        width:140,
        height:40,
        //borderWidth:1,
        //borderColor:'#777',
        backgroundColor: '#003366',
        margin:5,
        borderRadius:16,
    },
    buttonText:{
        color:'white',        
        fontSize:24,
        textAlign:'center',
    },
})