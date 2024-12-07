import { View, Text, SafeAreaView, Platform } from 'react-native'
import  Constants  from 'expo-constants'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemedView } from './ThemedView'

const MySafeAreaComponent = (props:any) => {
  return (
    <ThemedView style={{flex: 1}}>
    <SafeAreaView {...props} style={{paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0}}>{props.children}</SafeAreaView>
    </ThemedView>
    )
  
}

export default MySafeAreaComponent