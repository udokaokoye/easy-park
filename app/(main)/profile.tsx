import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import MySafeAreaComponent from '@/components/MySafeAreaComponent'
import { AntDesign, EvilIcons, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const profile = () => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme == 'dark' ? Colors.dark.text : Colors.light.text;
  const tintColor = colorScheme == 'dark' ? Colors.dark.lightBackgroud : Colors.light.lightBackground
  
  return (
        // <ScrollView className='flex-1'>
      <MySafeAreaComponent>

        <View>
            <Ionicons size={24} name='chevron-back' color={textColor} />
        </View>

        <View className='flex-row items-center gap-x-5 p-2'>
            <View style={{width:80, height: 80, backgroundColor: tintColor}} className=' rounded-full flex-col justify-center items-center'>
                <Ionicons name='person' color={'white'} size={45}/>
            </View>
            <View>
                <View className='flex-row items-center gap-x-2'>
                <ThemedText className='text-2xl font-bold'>Levi Okoye</ThemedText>
                <Ionicons name='chevron-forward' color={textColor} size={17} />    
                </View>
                <ThemedText className='text-sm'>sixplustwo@mail.uc.edu</ThemedText>
            </View>
        </View>

        <View className='flex-row justify-between mt-3 p-2 self-center rounded-2xl' style={{width: '97%', height: 120, backgroundColor: tintColor}}>
            <View className='flex justify-center items-center'>
                <FontAwesome6 name='square-parking' color={'white'} size={30} />

                <Text className='text-xl mt-2 font-bold text-white'>5</Text>
                <Text className=' text-white'>Total Checkins.</Text>
            </View>
            <View style={{borderRightWidth: 1, borderRightColor: '#ccc'}}></View>

            <View className='flex justify-center items-center'>
                <EvilIcons name='credit-card' color={'white'} size={30} />

                <Text className='text-xl mt-4 font-bold text-white'>$59.25</Text>
                <Text className=' text-center text-white'>Total Payed YTD.</Text>
            </View>
            <View style={{borderRightWidth: 1, borderRightColor: '#ccc'}}></View>
            

            <View className='flex justify-center items-center'>
                <MaterialCommunityIcons name='star-four-points-outline' color={'white'} size={30} />

                <Text className='text-xl mt-2 font-bold text-white'>1</Text>
                <Text className=' text-white'>Parking Points</Text>
            </View>
        </View>

        <View style={{padding: 10}}>
            <TouchableOpacity className=' px-5 py-2 mt-10 flex-row items-center rounded-lg gap-x-2'>
            <AntDesign name="link" size={24} color="white" />
                <ThemedText>Link Parking Pass</ThemedText>
                </TouchableOpacity>
            <TouchableOpacity className=' px-5 py-2 flex-row items-center rounded-lg mt-5 gap-x-2'> 
                <MaterialCommunityIcons name="exit-to-app" size={24} color="red" />
                <ThemedText>Signout</ThemedText></TouchableOpacity>
        </View>
      

      {/* <ThemedText>Link your parking pass here.</ThemedText> */}
    </MySafeAreaComponent>
        // </ScrollView>
  )
}

export default profile