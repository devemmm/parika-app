import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, WIDTH } from '../../constants/constants';

export class SettingScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >Settings</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')} style={[styles.ListItemView, { height: 50 }]}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Edit profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("PasswordNew")} style={[styles.ListItemView, { height: 50 }]}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Reset password</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ListItemView}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Language and Region</Text>
                    <Text style={styles.ListItemViewSub}>English</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ListItemView}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Themes</Text>
                    <Text style={styles.ListItemViewSub}>Light</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ListItemView, { height: 50 }]}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Clear search history</Text>
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white'
    },
    HeaderView: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15
    },
    BackArrow: {
        width: WIDTH *.15,
    },
    HeaderTextView: {
        flex: 1,
        alignItems: 'center'
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    ListItemView: {
        height: 65,
        marginRight: 15,
        marginLeft: 15,
        alignItems: 'center',
        borderBottomColor: bright_green,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ListItemViewTitle: {
        fontSize: 15,
    },
    ListItemViewSub: {
        color: 'grey',
        fontSize: 12
    }
})
export default SettingScreen
