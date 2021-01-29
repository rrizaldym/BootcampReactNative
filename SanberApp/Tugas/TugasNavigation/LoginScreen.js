import React from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

export default function LoginScreen ({navigation}){
    return (
        <View style={styles.container} >
            <Text>Login Screen</Text>
            <Button
                title='Menuju Skill Screen'
                onPress={()=>{
                    navigation.navigate("Home")
                }}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
