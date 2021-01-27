import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { 
    MaterialCommunityIcons,
    FontAwesome,
    AntDesign,
    Zocial
} from '@expo/vector-icons';

export default class App extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Tentang Saya</Text>
                        <Image source={require('./images/IMG_20181230_091832_679.jpg')} style={styles.pp} />
                        <Text style={styles.name}>Rizky Rizaldy M</Text>
                        <Text style={styles.job}>React Native Devloper</Text>   
                    </View>

                    <View style={styles.portofolio}>
                        <Text style={styles.bodyText}>Portofolio</Text>
                        <View style={styles.listPortofolio}>
                            <TouchableOpacity style={styles.item}>
                                <AntDesign name="github" size={45} color="#4078c0" />
                                <Text style={styles.linkText}>@rrizaldym</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item}>
                                <MaterialCommunityIcons name="gitlab" size={45} color="#FCA326" />
                                <Text style={styles.linkText}>@rrizaldym</Text>
                            </TouchableOpacity>
                        </View>                    
                    </View>

                    {/* <ScrollView> */}
                        <View style={styles.hubungisaya}>
                            <Text style={styles.bodyText}>Hubungi Saya</Text>
                            <View style={styles.listHubunginSaya}>
                                <View style={{flexDirection:'row', justifyContent: 'space-around'}} >
                                    <TouchableOpacity style={styles.item2}>
                                        <Icons name='facebook' size={35} color='#1877f2' />
                                        <Text style={styles.linkText2}>Rizky Rizaldy M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.item2}>
                                        <AntDesign name="instagram" size={35} color="#8a3ab9" />
                                        <Text style={styles.linkText2} color="#8a3ab9">@rizkyrizaldym</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.item2}>
                                        <Icons name='twitter' size={35} color='#1DA1F2' />
                                        <Text style={styles.linkText2} color='#1DA1F2'>@rizkyrizaldym</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                                    <TouchableOpacity style={styles.item2}>
                                        <FontAwesome name="whatsapp" size={35} color="#4FCE5D" />
                                        <Text style={styles.linkText}>089668843342</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.item2}>
                                        <Zocial name="gmail" size={24} color="#BB001B" />
                                        <Text style={styles.linkText}>rizky.rizaldy.m@gmail.com</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>                    
                        </View>                
                    {/* </ScrollView> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        //justifyContent:'space-evenly',      
    },
    title:{
        //marginTop:64,
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:20,        
    },
    pp:{
        width:200,
        height:200,
        borderRadius:200,
        //alignSelf:'flex-end'
        margin:10,
    },
    titleText:{
        fontSize:36,
        color:'#003366',
        fontWeight:'bold'        
    },
    name:{
        fontSize:24,
        color:'#003366',
        fontWeight:'bold'
    },
    job:{
        fontSize:16,
        color:'#3EC6FF',
        //fontWeight:'bold'
    },
    portofolio:{
        width:359,
        height:140,
        borderRadius:16,
        backgroundColor:'#efefef',
        alignSelf:'center',
        margin:5,
    },
    item:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    item2:{
        // flexDirection:'row',
        alignItems: 'center',
        //justifyContent: 'center',
        justifyContent:'space-evenly',
    },
    bodyText:{
        fontSize: 18,
        color:'#003366',
        marginLeft:7,
        marginTop:2,
    },
    listPortofolio:{
        borderTopColor:'#003366',
        borderTopWidth: 1,
        margin:5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        height: 100,
        //borderBottomColor:'#003366',
        //borderBottomWidth:1,
    },
    linkText:{
        fontSize: 16,
        color:'#003366',
        fontWeight:'bold'
    },
    linkText2:{
        fontSize: 14,
        // color:'#003366',
        fontWeight:'bold'
    },
    hubungisaya:{
        width:359,
        height:251,
        borderRadius:16,
        backgroundColor:'#efefef',
        alignSelf:'center',
        margin:5,
        // flexDirection:'row'
    },
    listHubunginSaya:{
        borderTopColor:'#003366',
        borderTopWidth: 1,
        margin:5,
        padding:10,
        height: 200,
        justifyContent:'space-evenly',
        // flexDirection:'row',
        //borderBottomColor:'#003366',
        //borderBottomWidth:1,
    },
    
})