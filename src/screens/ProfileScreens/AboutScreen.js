import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { WIDTH } from '../../constants/constants';

export class AboutScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >About Parika</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <ScrollView>
                <Text style={styles.SectionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit justo, ullamcorper a risus ultrices, pellentesque bibendum lectus. Pellentesque ligula urna, volutpat eget mi eu, aliquam facilisis nunc. Praesent bibendum dui justo, non semper risus tincidunt a. Fusce eu enim metus. Proin fringilla quam eget ex bibendum, elementum malesuada urna tincidunt. Nunc quis massa vulputate, commodo magna eget, mattis arcu. Nullam tortor erat, posuere ut pulvinar at, mollis eu sem. In sodales sodales sapien, nec ultrices sapien consectetur sit amet. Mauris velit arcu, ultricies non metus ac, faucibus faucibus dolor.
                </Text>

                <Text style={styles.SectionText}>
                    Nulla sit amet tortor ornare, rutrum urna et, eleifend turpis. Cras sem magna, consectetur nec varius eget, laoreet ac sem. Sed venenatis dui sed erat bibendum, venenatis dignissim lorem feugiat. Proin vitae ex efficitur odio ultrices pretium. Morbi faucibus nibh sit amet feugiat mattis. Phasellus eget enim ac ipsum ultrices porttitor sed at magna. Ut non quam augue. Fusce ultrices ac leo sit amet tincidunt. Phasellus in vehicula tortor. Sed vel imperdiet eros, lacinia porttitor dolor. Mauris posuere volutpat est, a scelerisque dui. Nulla fringilla orci ante, ac dapibus massa malesuada vitae. Nulla facilisi. Nulla consectetur massa in porta lacinia.
                </Text>

                <Text style={styles.SectionText}>
                    Mauris convallis odio vestibulum venenatis condimentum. Vivamus nec luctus lectus. Morbi congue elit ut est ultricies, eu ullamcorper mauris semper. Donec sit amet metus elit. Suspendisse dictum molestie diam, eu feugiat dui porta quis. Nullam id augue et mi maximus varius non in mi. Etiam molestie eu purus nec laoreet.
                </Text>

                <Text style={styles.SectionText}>
                    Fusce eu convallis risus. Ut ac semper ante. Morbi felis justo, mollis at leo nec, eleifend porta purus. Fusce nec massa rutrum ipsum facilisis pellentesque eu molestie ante. Morbi eget risus faucibus, gravida ex vel, molestie urna. Phasellus arcu magna, ultrices sit amet arcu quis, malesuada placerat ligula. Donec euismod in nisi et ullamcorper.
                </Text>
            </ScrollView>
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
        paddingLeft: 15
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
    SectionText: {
        marginTop: 10,
        fontSize: 16,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,    
    }
})
export default AboutScreen
