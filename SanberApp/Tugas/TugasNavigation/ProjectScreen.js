import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProjectScreen (){
    return (
        <View style={styles.container}>
            <Text>Halaman Project Screen</Text>
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