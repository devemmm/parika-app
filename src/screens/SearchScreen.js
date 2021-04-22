import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Modal  } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { WIDTH, HEIGHT, theme_green, theme_grey } from '../constants/constants';
import { TextInput } from 'react-native-gesture-handler';
import { api } from '../data/api';


export class SearchScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow} >
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTitleView}>
                    <Text style={styles.HeaderTitle}>Search</Text>
                </View>
                <View style={{ width: WIDTH *.2 }} />
            </View>
            <View style={styles.Search}>
                <Feather name="search" size={24} color="black" />
                <TextInput
                style={styles.SearchInput}
                placeholder="Try 'Kigali City Tower'"
                />
            </View>
            <View style={styles.RecentView}>
                <Text style={styles.RecentSectionHeader}>RECENT</Text>
                {api.map((item) => {
                    return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')} style={styles.RecentOne} key={item.id} >
                        <Feather name="clock" size={22} color="grey" style={{ marginRight: 16 }} />
                        <View>
                            <Text style={styles.RecentOneHeader}>{item.name}</Text>
                            <Text style={styles.RecentOneSub} >{item.location}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                })}
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    HeaderView: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    BackArrow: {
        width: WIDTH *.2,
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Search: {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    SearchInput: {
        marginLeft: 7,
        flex: 1,
        fontSize: 15
    },
    RecentView: {
        margin: 15
    },
    RecentSectionHeader: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 13,
    },
    RecentOne: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 13
    },
    RecentOneHeader: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 15
    },
    RecentOneSub: {
        color: 'grey',
        fontSize: 12,
        textTransform: 'capitalize'
    }
})

export default SearchScreen
