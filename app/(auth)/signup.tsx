import { View, Text, TextInput, Pressable, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import MySafeAreaComponent from '@/components/MySafeAreaComponent'
import { ThemedText } from '@/components/ThemedText'
import { Link, Redirect, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import * as Location from 'expo-location';

import MapView, { Marker } from 'react-native-maps'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '@/navigationTypes'
import { useNavigation } from 'expo-router'
import { ThemedView } from '@/components/ThemedView'

const signup = () => {
  const [signupProgressPercent, setsignupProgressPercent] = useState<number>(20);
  const [currentStage, setcurrentStage] = useState<number>(0)
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const emailPattern = /^[^\s@]+@mail\.uc\.edu$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/
  const [position, setPosition] = useState<any>();
  const router = useRouter()

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

  // Text Input States
  const [firstName, setfirstName] = useState<string>('John');
  const [lastName, setlastName] = useState<string>('Doe');
  const [email, setemail] = useState<string>('johndoe@mail.uc.edu')
  const [password, setpassword] = useState<string>('Express0')
  const [confirmPassword, setconfirmPassword] = useState<string>('Express0')
  const [faveGarage, setfaveGarage] = useState<any>(null)
  

  const continueStep = () => {

    switch (currentStage) {
      case 0:
        if (firstName == '' || lastName == '') {
          alert("Please Enter First and Last Name")
          return
        }
        break;
      case 1:
        if (email == '') {
          alert("Please Enter Email Address")
          return
        } else if (!emailPattern.test(email)) {
          alert('Invalid Email - Please enter a valid UC email')
          return
        }
        break;

      case 2:
        if (password == '' || confirmPassword == '') {
          alert("Please Enter Password")
          return
        } else if(!passwordPattern.test(password)) {
          alert("Password must be at least 8 characters long, include 1 uppercase letter, and 1 number.")
          return;
        } else if (password !== confirmPassword) {
          alert("Password must match");
          return;
        } 
        break;


    
      default:
        break;
    }

    setcurrentStage(currentStage+1);
    setsignupProgressPercent(signupProgressPercent + 20)
  }

  

  const completeOnboarding = () => { 
    // create user
    // navigate to home screen.
    router.replace("/(main)/")
    // return <Redirect href={'/onboarding'} />-
    

  }

  return (
    <MySafeAreaComponent>
      <ThemedView className=' px-5' 
      // style={{backgroundColor: Colors.dark.background}}
      >

      <View className=' flex-row items-center gap-x-5 '>
        <Pressable onPress={() => {
          setcurrentStage(currentStage !== 0 ? currentStage-1: 0)
          setsignupProgressPercent(signupProgressPercent !== 10 ? signupProgressPercent - 11 : 10)
        }}><Ionicons name='arrow-back-outline' size={35} color={colorScheme == 'dark' ? Colors.dark.text : Colors.light.text} /></Pressable>
        <View className='w-[68%]'>
        <View className={`h-2 bg-blue-500 rounded-2xl`} style={{width: `${signupProgressPercent}%`}} ></View>

        </View>
        <AntDesign className=' justify-end' name='questioncircleo' size={30} color={colorScheme == 'dark' ? Colors.dark.text : Colors.light.text} />
        </View>

      <View className='mt-10'>

    {/* !Stage 0 - Name */}
    {currentStage == 0 && (
      <>
      <ThemedText type='title' className='text-center text-xl font-bold mb-5'>Let's Get You Started</ThemedText>
        <ThemedText className=''>First Name</ThemedText>

        <TextInput value={firstName} onChangeText={(txt) => setfirstName(txt)} style={{color: colorScheme == 'dark' ? Colors.dark.text :""}} placeholder='John' className='h-12 px-5 font-bold rounded-lg border-gray-300 border mt-3' />

        <ThemedText  className=' mt-5'>Last Name</ThemedText>

        <TextInput value={lastName} onChangeText={(txt) => setlastName(txt)} style={{color: colorScheme == 'dark' ? Colors.dark.text : ""}} placeholder='Doe' className='h-12 px-5 rounded-lg border-gray-300 border mt-3' />
      </>
    )}
        
      
      
      {/* Stage 1 - Email */}

      {currentStage == 1 && (
        <>
        <ThemedText className='text-center text-xl font-bold mb-5'>Hey {firstName} 👋, Let's get your Email.</ThemedText>
        <ThemedText className=''>Email Address</ThemedText>
        <ThemedText className=' italic text-xs mt-3'>must be your school email</ThemedText>

        <TextInput value={email} onChangeText={(txt) => setemail(txt)} style={{color: colorScheme == 'dark' ? Colors.dark.text :""}} placeholder='johndoe@mail.uc.edu' className='h-12 px-5 font-bold rounded-lg border-gray-300 border mt-3' />
        </>
      )}

{currentStage == 2 && (
        <>
        <ThemedText className='text-center text-xl font-bold mb-5'>Hey {firstName} 👋, Secure your Account 🔒</ThemedText>
        <ThemedText className=''>Password</ThemedText>
        <ThemedText className=' italic text-xs mt-3'>password must be at least 8 characters long, include 1 uppercase letter, and 1 number.</ThemedText>
        <TextInput value={password} secureTextEntry  onChangeText={(txt) => setpassword(txt)} style={{color: colorScheme == 'dark' ? Colors.dark.text :""}} placeholder='secure password' className='h-12 px-5 font-bold rounded-lg border-gray-300 border mt-3' />

        <ThemedText className='mt-5'>Confirm Password</ThemedText>
        <TextInput value={confirmPassword} secureTextEntry onChangeText={(txt) => setconfirmPassword(txt)} style={{color: colorScheme == 'dark' ? Colors.dark.text :""}} placeholder='re-enter secure password' className='h-12 px-5 font-bold rounded-lg border-gray-300 border mt-3' />
        </>
      )}

{currentStage == 3 && (
        <>
        <ThemedText className='text-center text-lg font-bold mb-1'>Hey {firstName} 👋, Select your favorite garage 🚗</ThemedText>
        <ThemedText className='text-lg mb-5'>{faveGarage !== null && faveGarage.name + " - " + faveGarage.address}</ThemedText>


        <View style={{width: '100%', height: "70%"}} className='rounded-xl overflow-hidden' >
          {setErrorMsg !== null ? (
                  <MapView style={{width: "100%", height: '100%'}} showsUserLocation showsMyLocationButton={true}
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
                    coordinate={garage.coordinates}
                    onPress={() => setfaveGarage(garage)}
                    />
                   )})}
                   </MapView>
          ) : (<>
          <ThemedText className='text-2xl font-bold'>Please turn on location access or skip this step</ThemedText>
          </>)}

    </View>
        </>
      )}


{currentStage == 3 && (
  <>
  <Pressable onPress={() => completeOnboarding()} className='p-5 bg-blue-400 rounded-xl' style={{marginTop: 10}}><Text className='text-center text-white font-bold'>Complete</Text></Pressable>

<Pressable onPress={() => completeOnboarding()} className='p-5  rounded-xl' style={{marginTop: 10}}><ThemedText className='text-center  font-bold'>Skip</ThemedText></Pressable>
  </>
)}
      </View>

{currentStage !== 3 && (

  <>
  <Pressable onPress={() => {
    continueStep()
  }} className='p-5 bg-blue-400 rounded-xl' style={{marginTop: currentStage == 3 ? 0 : 30}}><Text className='text-center text-white font-bold'>Continue</Text></Pressable>
      <ThemedText className='text-center mt-3'>Already have an account? <Link href={'/login'}><ThemedText className='text-blue-400'>Login</ThemedText></Link></ThemedText>
  </>
    )}
      </ThemedView>
    </MySafeAreaComponent>
  )
}

export default signup