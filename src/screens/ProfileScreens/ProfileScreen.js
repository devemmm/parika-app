import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, theme_grey, WIDTH } from '../../constants/constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export class ProfileScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <ScrollView>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')} style={styles.ProfileHeader}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1533469513-03bfed91f496?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={styles.Image} />
                <View style={styles.UserDetails}>
                    <View style={styles.NamesView} >
                        <Text style={styles.Names}>Emmy Devemm</Text>
                        <Feather name="edit-3" size={20} color="black" />
                    </View>
                    <Text style={styles.CarName}>Hilux - RAD 345N</Text>
                    <View style={styles.AccountTagView}>
                        <Text style={styles.AccountTag} >Premuim</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationSettings')} style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="bell" size={20} color="black" />
                        <Text style={styles.ListItemName}>Notification</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WalletSettings')} style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="credit-card" size={20} color="black" />
                        <Text style={styles.ListItemName}>My wallet</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.Divider} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingScreen')} style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="settings" size={20} color="black" />
                        <Text style={styles.ListItemName}>Settings</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>                
                <TouchableOpacity style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="message-square" size={20} color="black" />
                        <Text style={styles.ListItemName}>Send feedback</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="help-circle" size={20} color="black" />
                        <Text style={styles.ListItemName}>Help center</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="info" size={20} color="black" />
                        <Text style={styles.ListItemName}>About us</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ListItemView}>
                    <View style={styles.ListItemText}>
                        <Feather name="log-out" size={20} color={theme_green} />
                        <Text style={[styles.ListItemName, { color: theme_green }]}>About us</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.SpecsView}>
                <Text style={styles.Specs}>Device ID: e70e-3421</Text>
                <Text style={styles.Specs}>Version: 1.00.0</Text>
            </View>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    ProfileHeader: {
        backgroundColor: bright_green,
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    Image: {
        height: WIDTH *.20,
        width: WIDTH *.20,
        borderRadius: WIDTH *.25,
        resizeMode: 'cover'
    },
    UserDetails: {
        marginLeft: 10,
        flex: 1
    },
    NamesView :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Names: {
        fontSize: 17,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    CarName: {
        color: 'grey',
        fontSize: 12
    },
    AccountTagView: {
        backgroundColor: theme_green,
        width: WIDTH *.20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        height: 23
    },
    AccountTag: {
        textTransform: 'capitalize',
        fontSize: 12
    },
    ListItemView: {
        flexDirection: 'row',
        height: 50,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: bright_green,
        borderBottomWidth: 1
    },
    ListItemText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListItemName: {
        marginLeft: 15,
        fontSize: 15
    },
    Divider: {
        height: 30,
    },
    SpecsView: {
        height: HEIGHT *.15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Specs: {
        color: 'grey',
        fontSize: 12
    }
})
export default ProfileScreen
