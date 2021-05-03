import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  HEIGHT,
  theme_green,
  bright_green,
  WIDTH,
} from '../../constants/constants';
import { Feather } from '@expo/vector-icons';
import { api } from '../../data/api';

export class TicketScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.Container}>
        <Modal
          statusBarTranslucent={true}
          animationType="none"
          transparent={true}
          visible={modalVisible}>
          <View>
            <View style={styles.ModalBG} />
            <View
              style={{
                position: 'absolute',
                height: HEIGHT,
                width: WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.ModalView}>
                <View style={styles.CkeckVector}>
                  <Feather name="alert-triangle" size={40} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Are you sure you want to delete this ticket?
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'grey',
                    textAlign: 'center',
                    marginTop: 5,
                  }}>
                  Please note that this action can not be undone
                </Text>
                <View style={styles.ModalButtonView}>
                  <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={[styles.AlertButtons, { backgroundColor: theme_green }]}>
                    <Text style={{ color: 'white' }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={[styles.AlertButtons, { backgroundColor: 'red' }]}>
                    <Text style={{ color: 'white' }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.HeaderView} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}>
          <Text style={styles.HeaderTitle}>My Tickets</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BookedTicket')}
            style={styles.TicketCard}>
            <View style={styles.TicketHeader}>
              <View style={styles.TicketNameView}>
                <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                <Text style={styles.ParkingName}>{api[0].name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.ParkingTime, { marginRight: 25 }]}>
                    <Feather name="calendar" size={16} color="grey" />
                    <Text style={styles.ParkingTimeText}>Apr 4, 2021</Text>
                  </View>
                  <View style={styles.ParkingTime}>
                    <Feather name="clock" size={16} color="grey" />
                    <Text style={styles.ParkingTimeText}>12:00 - 02:00</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
            </View>
            <View style={styles.TicketFooter}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.ParkingTag} />
                <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Feather name="trash-2" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={styles.SectionHeader}>History</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BookedTicket')}
            style={styles.TicketCard}>
            <View style={styles.TicketHeader}>
              <View style={styles.TicketNameView}>
                <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                <Text style={styles.ParkingName}>{api[0].name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.ParkingTime, { marginRight: 25 }]}>
                    <Feather name="calendar" size={16} color="grey" />
                    <Text style={styles.ParkingTimeText}>Apr 4, 2021</Text>
                  </View>
                  <View style={styles.ParkingTime}>
                    <Feather name="clock" size={16} color="grey" />
                    <Text style={styles.ParkingTimeText}>12:00 - 02:00</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
            </View>
            <View style={styles.TicketFooter}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.ParkingTag} />
                <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Feather name="trash-2" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  HeaderView: {
    backgroundColor: theme_green,
    paddingTop: StatusBar.currentHeight,
    height: HEIGHT * 0.25,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  ModalBG: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'black',
    opacity: 0.7,
  },
  ModalView: {
    width: WIDTH * 0.85,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModalButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH * .77,
    marginBottom: 10,
    marginTop: 15
  },
  AlertButtons: {
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH *.37
  },
  CkeckVector: {
    backgroundColor: '#fa6161',
    height: WIDTH * 0.2,
    width: WIDTH * 0.2,
    borderRadius: WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  ScrollView: {
    position: 'absolute',
    paddingTop: StatusBar.currentHeight,
    paddingRight: 15,
    paddingLeft: 15,
    right: 0,
    left: 0,
  },

  HeaderTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 15,
    marginBottom: 20,
  },
  TicketCard: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  TicketHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomColor: '#dcddde',
    borderBottomWidth: 1,
  },
  TicketNameView: {
    flex: 1,
  },
  ParkingLotName: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme_green,
  },
  ParkingName: {
    fontSize: 17,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Parkingprice: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ParkingTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ParkingTimeText: {
    color: 'grey',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  TicketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  ParkingTag: {
    height: 20,
    width: 20,
    backgroundColor: theme_green,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  SectionHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
});
export default TicketScreen;
