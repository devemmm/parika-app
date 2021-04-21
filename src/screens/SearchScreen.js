import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar,  } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { WIDTH } from '../constants/constants';
import { TextInput } from 'react-native-gesture-handler';
import { api } from '../data/api';


export class SearchScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
        <View style={styles.Container}>
            <Modal
            animationType="slide"
            transparent={true}
            statusBarTranslucent={true}
            visible={modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.ModalBackground} />
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalView}>
                        <View style={styles.CkeckVector}>
                            <Feather name="check" size={65} color="white" />
                        </View>
                        <Text style={styles.ModalHeader}>Congratulation!!</Text>
                        <Text style={styles.ModalText}>Successful!</Text>
                        <TouchableOpacity onPress={this.handleModalButton} style={styles.ModalButton}>
                            <Text>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
                <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                    <Feather name="filter" size={24} color="black" />
                </TouchableOpacity>
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
    ModalBackground: {
        backgroundColor: 'black',
        flex: 1,
        opacity: .7
    },
    ModalContainer: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalView: {
        backgroundColor: 'white',
        width: WIDTH *.9,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CkeckVector: {
        backgroundColor: theme_green,
        height: WIDTH *.2,
        width: WIDTH *.2,
        borderRadius: WIDTH *.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2
    },
    ModalHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ModalText: {
        textAlign: 'center'
    },
    ModalButton: {
        backgroundColor: theme_green,
        height: 45,
        borderRadius: 50,
        width: WIDTH * .5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
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
