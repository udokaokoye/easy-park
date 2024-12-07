import { Image, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MapView, { Marker} from 'react-native-maps';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
export default function HomeScreen() {

  const [position, setPosition] = useState<any>();


  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [initialPostion, setinitialPostion] = useState({
    latitude: 39.129894,
        longitude: -84.516852,
        latitudeDelta: 0.01,  // Adjust this value to zoom in more or less
        longitudeDelta: 0.01
  })

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,  // Adjust this value to zoom in more or less
        longitudeDelta: 0.01
      });
    })();
  }, []);

const garages = [
  {
      "name": "CCM Garage",
      "address": "270 CCM Boulevard",
      "coordinates": {"latitude": 39.129894, "longitude": -84.516852},
      "pay_station": "Lobby near garage main entrance",
      "clearance": {
          "level_3_main": "7'6\"",
          "level_2_and_below": "6'10\""
      }
  },
  {
      "name": "Calhoun Garage",
      "address": "230 Calhoun St",
      "coordinates": {"latitude": 39.128439, "longitude": -84.516616},
      "pay_station": "Level P1 near elevator #4",
      "clearance": {
          "1000_level": "7'10\"",
          "remaining_levels": "7'5\""
      }
  },
  {
      "name": "Campus Green Garage",
      "address": "2935 Campus Green Drive",
      "coordinates": {"latitude": 39.135716, "longitude": -84.515223},
      "pay_station": "Level 3 near elevator",
      "clearance": "6'9\""
  },
  {
      "name": "Clifton Court Garage",
      "address": "321 Clifton Court",
      "coordinates": {"latitude": 39.134303, "longitude": -84.517271},
      "pay_station": "Level 1",
      "clearance": "6'4\""
  },
  {
      "name": "Clifton Lots",
      "address": "2915 Clifton Avenue",
      "coordinates": {"latitude": 39.134690, "longitude": -84.520307},
      "permit_parking_only": true
  },
  {
      "name": "Corry Garage",
      "address": "51 W. Corry Boulevard",
      "coordinates": {"latitude": 39.129001, "longitude": -84.512904},
      "pay_station": "Edwards 2 lobby",
      "clearance": "6'9\""
  },
  {
      "name": "Digital Futures",
      "address": "3080 Exploration Avenue",
      "coordinates": {"latitude": 39.134089, "longitude": -84.494941}
  },
  {
      "name": "Stratford Heights Garage",
      "address": "2630 Stratford Avenue",
      "coordinates": {"latitude": 39.130841, "longitude": -84.521377},
      "permit_parking_only": true,
      "clearance": "6'8\""
  },
  {
      "name": "Stratford Lot 4",
      "coordinates": {"latitude": 39.130825, "longitude": -84.522303},
      "permit_and_event_parking_only": true
  },
  {
      "name": "Stratford Lot 1",
      "coordinates": {"latitude": 39.131631, "longitude": -84.520621},
      "permit_parking_only": true
  },
  {
      "name": "Stratford Lot 2",
      "coordinates": {"latitude": 39.131785, "longitude": -84.521869},
      "permit_parking_only": true
  },
  {
      "name": "Stratford Lot 3",
      "coordinates": {"latitude": 39.131758, "longitude": -84.522089},
      "permit_parking_only": true
  },
  {
      "name": "University Avenue Garage",
      "address": "40 W. University Avenue",
      "coordinates": {"latitude": 39.134615, "longitude": -84.510986},
      "ada_visitor_and_permit_parking_only": true,
      "clearance": {
          "level_1": "7'1\"",
          "level_2_and_up": "7'6\""
      }
  },
  {
      "name": "Varsity Village Garage",
      "address": "200 Varsity Village Drive",
      "coordinates": {"latitude": 39.130166, "longitude": -84.515964},
      "pay_station": "Near elevator",
      "clearance": "9'6\""
  },
  {
      "name": "Woodside Avenue Garage",
      "address": "2913 Woodside Drive",
      "coordinates": {"latitude": 39.135025, "longitude": -84.515180},
      "pay_station": "Level 1 by library elevator",
      "clearance": "6'7\""
  },
  {
    "name": "Blood Cancer Healing Center",
    "address": "3232 Healing Way, Cincinnati, OH 45229",
    "coordinates": {"latitude": 39.138082474177075, "longitude": -84.50119246416794},
    "clearance": "7'8\"",
    "campus": "medical"
},
{
    "name": "Eden Garage",
    "address": "3223 Eden Avenue",
    "visitor_parking": "Levels 7 & 8",
    "coordinates": {"latitude": 39.137669, "longitude": -84.505159},
    "pay_station": "Level 5 near bridge to Medical Sciences Building",
    "clearance": "6'7\"",
    "campus": "medical"
},
{
    "name": "Kingsgate Garage",
    "address": "151 Goodman Drive",
    "coordinates": {"latitude": 39.136808, "longitude": -84.507685},
    "pay_station": "Level P1 near Kingsgate Garage entrance",
    "clearance": "6'8\"",
    "campus": "medical"
}
]

  
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <MapView style={styles.map} showsUserLocation showsMyLocationButton={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
      initialRegion={initialPostion}
      
      >
      
       {garages.map((garage, index) => {return (
        <Marker
        key={index}
        title={garage.name}
        description={garage.address}
        coordinate={garage.coordinates}/>
       )})}
       </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
