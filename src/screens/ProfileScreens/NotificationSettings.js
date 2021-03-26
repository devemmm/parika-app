import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Switch } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { bright_green, theme_green, theme_grey, WIDTH } from '../../constants/constants';

export class NotificationSettings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isEnabled: false
        }
    }

    toggleSwitch = (switched) => {
        this.setState({ isEnabled: switched })
    }
    
    render() {
        const { isEnabled } = this.state
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >Notification Settings</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <View style={styles.ListItemView}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Push notification</Text>
                    <Text style={styles.ListItemViewSub}>Notify me through push notification</Text>
                </View>
                <Switch
                    trackColor={{ false: "#AAEDBA", true: "#AAEDBA" }}
                    thumbColor={theme_green }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.ListItemView}>
                <View>
                    <Text style={styles.ListItemViewTitle}>Email notification</Text>
                    <Text style={styles.ListItemViewSub}>Notify me on my email</Text>
                </View>
                <Switch
                    trackColor={{ false: "#AAEDBA", true: "#AAEDBA" }}
                    thumbColor={theme_green }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
    },
    HeaderView: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    BackArrow: {
        width: WIDTH*.15,
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
        fontWeight: 'bold',
        fontSize: 16,
    },
    ListItemViewSub: {
        color: 'grey',
        fontSize: 12
    }
})
export default NotificationSettings
