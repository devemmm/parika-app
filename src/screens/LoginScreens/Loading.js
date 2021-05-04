import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { theme_green } from '../../constants/constants'

export class Loading extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
    }

    componentDidMount(){
        this.handleNext()
    }

    handleNext = () => {
        setTimeout(() => {
            this.props.navigation.navigate('MainAppNav')
        }, 3000);
    }
    
    render() {
        if (this.state.loading) {
            return (
            <View style={styles.Container}>
                <ActivityIndicator size="large" color={theme_green} />
            </View>
            )            
        }
    }
}
export default Loading
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})