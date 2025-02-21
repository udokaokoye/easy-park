import { View, Text, TouchableOpacity, Image, ImageBackground, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import MySafeAreaComponent from '@/components/MySafeAreaComponent'
import { ThemedText } from '@/components/ThemedText'
import { hide } from 'expo-splash-screen'
import { Colors } from '@/constants/Colors'
import * as Brightness from 'expo-brightness';
import { useRouter } from 'expo-router'

const park = () => {
  const [scanMethod, setscanMethod] = useState<number>(0)
  const route = useRouter()
  const increaseBrightness = async () => {
    try {
      // Request permission (required on iOS)
      const { status } = await Brightness.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to change brightness was denied');
        return;
      }

      // Set brightness to maximum (value range: 0 to 1)
      await Brightness.setBrightnessAsync(1);
      console.log('Brightness set to maximum');
    } catch (error) {
      console.log("Error setting brightness", error);
    }
  };


  useEffect(() => {
    scanMethod == 1 && increaseBrightness()
  }, [scanMethod])
  
  return (
    <MySafeAreaComponent>
      <View className='px-5 justify-center items-center mt-10'>
        <View style={{width: '90%', height: 60}} className=' flex-row justify-between '>
          <TouchableOpacity style={{width: '50%', backgroundColor: scanMethod == 0 && Colors.dark.lightBackgroud}} className=' justify-center items-center border-white border-r-2' onPress={() => setscanMethod(0)}><ThemedText>Tap</ThemedText></TouchableOpacity>
          <TouchableOpacity style={{width: '50%', backgroundColor: scanMethod == 1 && Colors.dark.lightBackgroud}} className='justify-center items-center' onPress={() => setscanMethod(1)}><ThemedText>Scan</ThemedText></TouchableOpacity>
        </View>
      
      {scanMethod == 0 && (
        <View className='mt-28'>

          <ThemedText className='text-center text-3xl font-bold'>Tap Your Phone.</ThemedText>
          <ThemedText className='text-center mt-3'>Hold your phone near the reader and wait for a beep.</ThemedText>

<View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '80%', height: 300, borderRadius: 100, overflow: 'hidden', marginTop: 40,}}>
          <Image
           src='https://scriblo.s3.us-east-2.amazonaws.com/demo/nfc.gif' 
           style={{width: "100%", height: 300}} 
           resizeMode='cover'
           />
           </View>

          <TouchableOpacity onPress={() => route.push('(main)')} className='bg-red-500 py-4 px-20 rounded-xl mt-12'>
            <Text className='text-white text-lg'>Cancel</Text>
            </TouchableOpacity>
           </View>
            {/* <ThemedText>Tap</ThemedText> */}
          </View>
      )}


      {scanMethod == 1 && (
                <View className='mt-28'>

                <ThemedText className='text-center text-3xl font-bold'>Scan Your Barcode.</ThemedText>
                <ThemedText className='text-center mt-3'>Hold your phone under the barcode reader and wait for a beep.</ThemedText>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '80%', height: 300, borderRadius: 0, overflow: 'hidden', marginTop: 40,}}>
                <Image
                 src='https://scriblo.s3.us-east-2.amazonaws.com/demo/Screenshot+2024-12-04+at+9.52.01%E2%80%AFAM.png' 
                 style={{width: "100%", height: 300}} 
                 resizeMode='cover'
                 />
                 </View>
      
                <TouchableOpacity onPress={() => route.push('(main)')} className='bg-red-500 py-4 px-20 rounded-xl mt-12'>
                  <Text className='text-white text-lg'>Cancel</Text>
                  </TouchableOpacity>
                 </View>
                </View>
      )}
      </View>
    </MySafeAreaComponent>
  )
}

export default park