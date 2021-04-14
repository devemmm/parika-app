import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

function EditProfile({navigation}) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    

    return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackArrow}>
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
                        <View style={styles.CarImage}/>
                        <TouchableOpacity style={styles.EditButton}>
                            <Feather name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={pickImage} style={styles.UserImageView}>
                        {image && <Image source={{ uri: image }} style={styles.UserImage} />}
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
                        <View style={styles.PhoneInput} >
                            <Text style={{ marginRight: 5 }}>+250 </Text>
                            <TextInput keyboardType='numeric' placeholder='788 123 456' /> 
                        </View>
                    </View>
                    <Text style={[styles.SectionHeader, { marginTop: 30 }]}>Vehicle Info</Text>
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
                        <TextInput style={styles.TextInput} placeholder="RAD 234K" />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.SaveButton}>
                <Text>Save Changes</Text>
            </TouchableOpacity>
        </View>
        )
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
        height: HEIGHT *.2,
        backgroundColor: theme_green
    },
    EditButton: {
        height: 35,
        width: 35,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bright_green,
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
        height: WIDTH *.25,
        width: WIDTH *.25,
        marginTop: - HEIGHT *.07,
        marginLeft: 15,     
        backgroundColor: bright_green,
        borderRadius: 5
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
    PhoneInput: {
        marginBottom: 20,
        backgroundColor: bright_green,
        flexDirection: 'row',
        // width: WIDTH *.8,
        height: 45,
        borderRadius: WIDTH *.4,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
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
        backgroundColor: bright_green,
        height: 45,
        // marginTop: 10,
        borderRadius: WIDTH *.4,
        paddingLeft: 15
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
