import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Toolbar from '../components/Toolbar';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSheet: false,
      type: '',
      response: {},
      temp: 23,
    };
  }

  componentDidMount() {
    fetch('http://3.115.184.75:8099/v1/customer/vehicles', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer NGID_1010',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      const responseData = response.json();
      if (response.status == 200) {
        return responseData.then((data) => this.setState({ response: data }));
      } else {
        throw new Error('Server Error!');
      }
    });
  }

  setShowSheet = (flag, type) => {
    let prevType = this.state.type;
    this.setState({ type: type });
    if (prevType === type || this.state.showSheet === false) {
      this.setState({ showSheet: flag });
    }
  }

  increaseTemp = () => {
    let newTemp = this.state.temp + 1;
    this.setState({ temp: newTemp });
  }

  decreaseTemp = () => {
    let newTemp = this.state.temp - 1;
    this.setState({ temp: newTemp });
  }

  render() {

    //const[showSheet, setShowSheet] = useState(false);
    const { showSheet, type, response, temp } = this.state;

    return (
      <View style={styles.container}>


        <View style={styles.container1}>
          <View style={showSheet ? styles.headingCompressed : styles.heading}>
            <Text style={showSheet ? styles.headingTitleCompressed : styles.headingTitle}>Good afternoon,</Text>
            <Text style={showSheet ? styles.headingTitleCompressed : styles.headingTitle}>Matthew</Text>
            <View style={showSheet ? styles.batteryViewCompressed : styles.batteryView}>
              <Image source={require('../assets/battery_half_fill.png')} style={styles.battery} />
              <Text style={styles.batteryTitle1}>Battery 90%</Text>
              <Text style={styles.batteryTitle2}>Range 270km</Text>
            </View>
          </View>
          <Image source={require('../assets/Background_with_pattern.png')} style={styles.backgroundImage} />
          <Image source={require("../assets/Car_with_shadow.png")} resizeMode="contain" style={styles.mainImage} />
        </View>
        <View style={styles.container2}>
          <View style={styles.controlContainer}>

            <View style={styles.controlView}>
              <Text style={styles.controlText}>CABIN CLIMATE</Text>
              <TouchableOpacity onPress={() => this.setShowSheet(!showSheet, 'temp')}>
                <Image source={require('../assets/Cabin_Climate.png')} style={styles.control} />
              </TouchableOpacity>
            </View>

            <View style={styles.controlView}>
              <Text style={styles.controlText}>SECURITY</Text>
              <TouchableOpacity onPress={() => this.setShowSheet(!showSheet, 'security')}>
                <Image source={require('../assets/Security.png')} style={styles.control} />
              </TouchableOpacity>
            </View>

            <View style={styles.controlView}>
              <Text style={styles.controlText}>CAR DETAILS</Text>
              <TouchableOpacity onPress={() => this.setShowSheet(!showSheet, 'details')}>
                <Image source={require('../assets/Controls.png')} style={styles.control} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {showSheet &&
          <View style={styles.container3}>
            <Image source={require('../assets/UpArrow.png')} style={styles.upArrow} />
            {type === 'temp' &&
              <View style={styles.interiorTemp}>
                <View style={styles.interiorTempHeading}>
                  <Text>INTERIOR TEMPERATURE</Text>
                </View>
                <View style={styles.interiorTempContent}>
                  <TouchableOpacity onPress={this.decreaseTemp}>
                    <Image source={require('../assets/LeftArrow.png')} style={styles.arrow} />
                  </TouchableOpacity>
                  <View style={styles.tempView}>
                    <Text style={styles.temp}>{temp}&deg;</Text>
                  </View>
                  <TouchableOpacity onPress={this.increaseTemp}>
                    <Image source={require('../assets/RightArrow.png')} style={styles.arrow} />
                  </TouchableOpacity>
                </View>
                <View style={styles.interiorTempFooter}>
                  <Image source={require('../assets/clouds_sun.png')} style={styles.footerImg} />
                  <Text style={styles.footerText}>It is currently 23 degrees outside. Lorem ipsum dolor sit confit alors.</Text>
                </View>
              </View>
            }
            {type === 'details' &&
              <View style={styles.carDetails}>
                <View style={styles.carDetailsHeading}>
                  <Text>YOUR NISSAN ARYIA</Text>
                </View>
                <View style={styles.carDetailsContent}>
                  <View style={styles.leftCol}>
                    <View style={styles.ColView}>
                      <Text style={styles.detailsText1}>Model &amp; Year</Text>
                      <Text style={styles.detailsText2}>{response.vehicle_list[0].model}-{response.vehicle_list[0].model_year}</Text>
                    </View>
                    <View style={styles.ColView}>
                      <Text style={styles.detailsText1}>Transmission Type</Text>
                      <Text style={styles.detailsText2}>{response.vehicle_list[0].transmission_type}</Text>
                    </View>
                  </View>
                  <View style={styles.rightCol}>
                    <View style={styles.ColView}>
                      <Text style={styles.detailsText1}>Purchase Date</Text>
                      <Text style={styles.detailsText2}>{response.vehicle_list[0].purchase_date[0]}-{response.vehicle_list[0].purchase_date[1]}-{response.vehicle_list[0].purchase_date[2]}</Text>
                    </View>
                    <View style={styles.ColView}>
                      <Text style={styles.detailsText1}>Color</Text>
                      <Text style={styles.detailsText2}>{response.vehicle_list[0].color}</Text>
                    </View>
                  </View>
                </View>
              </View>
            }
          </View>
        }
        <Toolbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  container1: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  container2: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 60
  },
  container3: {
    width: '100%',
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  mainImage: {
    height: '54%',
    bottom: -25,
    position: "absolute"
  },
  controlContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  control: {
    width: 75,
    height: 75,
    marginHorizontal: 25
  },
  container4: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(14, 14, 14, 0.94)',
    flexDirection: "row"
  },
  controlText: {
    fontSize: 10,
    marginVertical: 15,
  },
  controlView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolBar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolBarText: {
    color: '#757575',
    marginTop: 4
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
    zIndex: 99
  },
  headingCompressed: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: '20%',
    zIndex: 99
  },
  headingTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
  },
  headingTitleCompressed: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  battery: {
    height: 16,
    width: 32,
  },
  batteryTitle1: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  batteryTitle2: {
    color: 'white',
    fontSize: 15,
  },
  batteryView: {
    flexDirection: 'row',
    marginTop: 25,
    resizeMode: 'contain'
  },
  batteryViewCompressed: {
    flexDirection: 'row',
    marginTop: 15,
    resizeMode: 'contain'
  },
  interiorTemp: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  interiorTempContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  interiorTempHeading: {
    flex: 1,
    justifyContent: 'center'
  },
  interiorTempFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  temp: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  arrow: {
    resizeMode: 'contain',
    height: '70%'
  },
  tempView: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    resizeMode: 'contain',
    width: '30%',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 10
  },
  footerImg: {
    resizeMode: 'contain',
    width: '8%',
    height: '30%',
  },
  upArrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    height: 10,
    marginTop: 18,
    marginRight: 8
  },
  carDetails: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  carDetailsHeading: {
    flex: 1,
    justifyContent: 'center'
  },
  carDetailsContent: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  ColView: {
    padding: 5
  },
  detailsText1: {
    fontSize: 12,
    marginVertical: 4
  },
  detailsText2: {
    fontSize: 15,
    color: '#9b9b9b'
  }

});
