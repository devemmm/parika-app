import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';

export class EditProfile extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >Edit Profile</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <ScrollView>
                <View>
                    <View>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }} style={styles.CarImage} />
                        <TouchableOpacity style={styles.EditButton}>
                            <Feather name="camera" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.UserImageView}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1533469513-03bfed91f496?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={styles.UserImage} />
                        <View style={styles.EditAvatarButton}>
                            <Feather name="camera" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.InputView}>
                    <Text style={styles.SectionHeader}>Personal Info</Text>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >First Name:</Text>
                        <TextInput style={styles.TextInput} placeholder="First Name" />
                    </View>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >Last Name:</Text>
                        <TextInput style={styles.TextInput} placeholder="Last Name" />
                    </View>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >Email:</Text>
                        <TextInput style={styles.TextInput} placeholder="example@abc.xyz" />
                    </View>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >Phone number:</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={styles.CountryCode}>
                                <Text >+250</Text>
                            </View>
                            <TextInput keyboardType='numeric' style={styles.TextInput} placeholder="781 234 567" />
                        </View>
                    </View>
                    <Text style={[styles.SectionHeader, { marginTop: 50 }]}>Vehicle Info</Text>
                    <TouchableOpacity style={styles.TextInputViewVehicle}>
                        <Text style={styles.Label} >Vehicle Type:</Text>
                        <Text >Cruiser</Text>
                    </TouchableOpacity>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >Vehicle Name:</Text>
                        <TextInput style={styles.TextInput} placeholder="Hyundai Vevo 2013" />
                    </View>
                    <View style={styles.TextInputView}>
                        <Text style={styles.Label} >Plate Number:</Text>
                        <TextInput keyboardType="numeric" style={styles.TextInput} placeholder="RAD 234K" />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.SaveButton}>
                <Text>Save Changes</Text>
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
    CarImage: {
        width: WIDTH,
        height: HEIGHT *.2
    },
    EditButton: {
        height: 35,
        width: 35,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme_green,
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    EditAvatarButton: {
        height: 35,
        width: 35,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme_green,
        position: 'absolute',
        right: -5,
        bottom: 0
    },
    UserImageView: {
        height: WIDTH *.25 + 5,
        width: WIDTH *.25,
        marginTop: - HEIGHT *.1,
        marginLeft: 15,        
    },
    UserImage: {
        height: WIDTH *.25,
        width: WIDTH *.25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
    },
    SectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 20
    },
    InputView: {
        marginBottom: 20
    },
    TextInputView: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20
    },
    TextInputViewVehicle: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    TextInput: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    CountryCode: {
        backgroundColor: bright_green,
        height: 30,
        marginRight: 10,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    SaveButton: {
        backgroundColor: theme_green,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5
    },
})
export default EditProfile
