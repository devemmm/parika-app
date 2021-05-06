import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {
  Feather,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import { api } from '../data/api';
import {
  HEIGHT,
  theme_green,
  theme_grey,
  bright_green,
  WIDTH,
} from '../constants/constants';

export class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      liked: false,
    };
  }

  componentDidMount() {
    const { item } = this.props.route.params;
  }

  handleLike = () => {
    if (this.state.liked) {
      this.setState({ liked: false });
    } else {
      this.setState({ liked: true });
    }
  };

  handleButton = (item) => {
    if (item) {
      this.props.navigation.navigate('BookingScreen');
    } else {
      this.setState({ showAlert: true });
    }
  };

  render() {
    const { item } = this.props.route.params;
    return (
      <View style={styles.Container}>
        <View>
          <Image
            style={styles.HeaderBackgroundImage}
            source={{ uri: item.url }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.BackButton}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ParkingBody}>
          <View style={styles.ParkingDetails}>
            <View>
              <Text style={styles.ParkingLocation}>{item.location}</Text>
              <Text style={styles.ParkingName}>{item.name}</Text>
              {item.available ? (
                <View
                  style={[
                    styles.ParkingStatus,
                    { backgroundColor: theme_green, width: WIDTH * 0.21 },
                  ]}>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    Available
                  </Text>
                </View>
              ) : (
                <View
                  style={[
                    styles.ParkingStatus,
                    { backgroundColor: 'red', width: WIDTH * 0.25 },
                  ]}>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    Overbooked
                  </Text>
                </View>
              )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.handleLike()}>
                {this.state.liked ? (
                  <MaterialIcons name="favorite" size={28} color="red" />
                ) : (
                  <MaterialIcons
                    name="favorite-outline"
                    size={28}
                    color="black"
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.RatingView}>{item.rating.toFixed(1)}</Text>
            </View>
          </View>
          <View style={styles.ParkingDistanceView}>
            <View style={styles.flexRow}>
              <FontAwesome5 name="car" size={18} color="black" />
              <Text style={styles.ParkingDistance}>{item.distance} m</Text>
            </View>
            <View style={styles.flexRow}>
              <Ionicons name="bookmark" size={18} color="black" />
              <Text style={styles.ParkingPrice}>Rwf {item.price}/hour</Text>
            </View>
          </View>
          <View>
            <Text style={styles.MoreDetailsHeader}>More Details</Text>
            <Text style={{ textTransform: 'capitalize' }}>
              <Text style={styles.BoldText}>Parking Address: </Text>
              {item.location}
            </Text>
            <Text style={{ marginTop: 5 }}>
              <Text style={styles.BoldText}>Street Number: </Text>
              {item.street}
            </Text>
            <Text style={{ marginTop: 5 }}>
              <Text style={styles.BoldText}>Open Hours: </Text>
              {item.hours_o} - {item.hours_c}{' '}
            </Text>
          </View>
        </ScrollView>
        {this.state.showAlert && (
          <View style={styles.AlertView}>
            <Text style={{ flex: 1 }}>
              This parking has run out of space. Please retry later.
            </Text>
            <TouchableOpacity
              onPress={() => this.setState({ showAlert: false })}
              style={styles.AlertViewButton}>
              <Text>Dismiss</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => this.handleButton(item.available)}
          style={styles.BookNowButton}>
          <Text>Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  HeaderBackgroundImage: {
    width: WIDTH,
    height: HEIGHT * 0.3,
  },
  BackButton: {
    position: 'absolute',
    marginTop: StatusBar.currentHeight + 15,
    backgroundColor: theme_green,
    marginLeft: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  ParkingBody: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  ParkingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 15,
  },
  ParkingLocation: {
    color: 'grey',
    textTransform: 'capitalize',
  },
  ParkingName: {
    fontWeight: 'bold',
    fontSize: 21,
    textTransform: 'capitalize',
  },
  RatingView: {
    backgroundColor: theme_green,
    width: WIDTH * 0.1,
    height: 25,
    borderRadius: 3,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ParkingDistanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 25,
    borderBottomColor: theme_green,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ParkingDistance: {
    marginRight: 20,
    marginLeft: 5,
  },
  ParkingPrice: {
    marginLeft: 5,
  },
  MoreDetailsHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  BoldText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  BookNowButton: {
    margin: 15,
    backgroundColor: theme_green,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AlertView: {
    backgroundColor: bright_green,
    position: 'absolute',
    bottom: 70,
    right: 15,
    left: 15,
    height: 70,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  AlertViewButton: {
    backgroundColor: theme_green,
    padding: 10,
    borderRadius: 5,
  },
  ParkingStatus: {
    borderRadius: 5,
    marginTop: 3,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailScreen;
