import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={{padding:20}}>
            <Text>Home</Text>
            <View style={{paddingHorizontal: 10}}>
                 <Button onPress={()=>navigation.navigate('Profile')} title="Profile"/>
            </View>
            <View style={{paddingHorizontal: 10}}>
                <Button onPress={()=>navigation.navigate('Login')} title="Login"/>
            </View>
            <View style={{paddingHorizontal: 10}}>
                <Button onPress={()=>navigation.navigate('MainApp')}  title="MainApp"/>                
            </View>
            <View style={{paddingHorizontal: 10}}>
                <Button onPress={()=>navigation.navigate('MyDrawwer')}  title="MyDrawwer"/>                
            </View>
           
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
