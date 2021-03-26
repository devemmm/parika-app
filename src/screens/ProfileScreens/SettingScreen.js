import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export class SettingScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <Text>SettingScreen</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default SettingScreen
