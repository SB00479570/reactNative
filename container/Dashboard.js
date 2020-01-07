import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Toolbar from '../components/Toolbar';

export default function Dashboard() {

  const [showSheet, setShowSheet] = useState(false);

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
            <TouchableOpacity onPress={() => setShowSheet(!showSheet)}>
              <Image source={require('../assets/Cabin_Climate.png')} style={styles.control} />
            </TouchableOpacity>
          </View>

          <View style={styles.controlView}>
            <Text style={styles.controlText}>SECURITY</Text>
            <TouchableOpacity onPress={() => setShowSheet(!showSheet)}>
              <Image source={require('../assets/Security.png')} style={styles.control} />
            </TouchableOpacity>
          </View>

          <View style={styles.controlView}>
            <Text style={styles.controlText}>CONTROLS</Text>
            <TouchableOpacity onPress={() => setShowSheet(!showSheet)}>
              <Image source={require('../assets/Controls.png')} style={styles.control} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showSheet &&
        <View style={styles.container3}>
          <Text>3</Text>
        </View>
      }
      <Toolbar />
    </View>
  );
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
  }

});
