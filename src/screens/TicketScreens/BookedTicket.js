import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  HEIGHT,
  theme_green,
  bright_green,
  WIDTH,
} from '../../constants/constants';
import { Feather } from '@expo/vector-icons';

export class BookedTicket extends Component {
  render() {
    return (
      <View style={styles.ModalContainer}>
        <ScrollView showsVerticalScrollIndicator >
          <View style={styles.ModalHeader}>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.ModalTicketCard}>
            <View style={styles.ModalHeaderCard}>
              <Text style={{ color: 'grey' }}>Ticket ID: 2315435654</Text>
            </View>
            <View>
              <View style={styles.FlexDirection}>
                <Text>Parking Lot</Text>
                <Text style={styles.BoldText}>Remera Parking</Text>
              </View>
              <View style={styles.FlexDirection}>
                <Text>Space Name</Text>
                <Text style={styles.BoldText}>SPCE G5 - 85</Text>
              </View>
              <View style={styles.FlexDirection}>
                <Text>Price</Text>
                <Text style={styles.BoldText}>Rwf 200</Text>
              </View>
            </View>
          </View>
          <View style={styles.QrView}>
            <Image
              style={styles.QrImage}
              source={{
                uri:
                  'https://miro.medium.com/max/1400/1*sHmqYIYMV_C3TUhucHrT4w.png',
              }}
            />
            <Text style={styles.ScanText}>Scan code to verify</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BookedTicket;
const styles = StyleSheet.create({
  ModalContainer: {
    flex: 1,
    backgroundColor: theme_green,
    paddingTop: StatusBar.currentHeight,
  },
  ModalHeader: {
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 5,
  },
  ModalTicketCard: {
    backgroundColor: 'white',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
  },
  ModalHeaderCard: {
    borderBottomWidth: 1,
    borderBottomColor: bright_green,
    paddingBottom: 15,
    marginBottom: 10,
  },
  FlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  BoldText: {
    fontWeight: 'bold',
  },
  QrView: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  QrImage: {
    height: WIDTH * 0.7,
    width: WIDTH * 0.7,
  },
  ScanText: {
    marginTop: 10,
    fontSize: 16,
    color: 'grey',
  },
});
