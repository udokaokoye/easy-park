import { View, Text, FlatList, Dimensions, ImageBackground, Pressable } from 'react-native';
import React, { useRef } from 'react';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const Onboarding = () => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const flatRef = useRef(null);
  const router = useRouter(); // Use expo-router's router for navigation

  const onboardingData = [
    {
      id: 1,
      name: (
        <Text className="text-black text-4xl font-bold">
          All In One Campus <Text style={{ color: '#284AE7' }}>Parking Solution</Text>
        </Text>
      ),
      desciption: 'Find parking, tap in, pay easily, all in one app',
      image: require('../../assets/images/onboardCard1.png'),
    },
    {
      id: 2,
      name: (
        <Text className="text-black text-4xl font-bold">
          Seamless Parking <Text style={{ color: '#284AE7' }}>Payments</Text>
        </Text>
      ),
      desciption: 'Pay for parking instantly with just a tap—no permit required.',
      image: require('../../assets/images/onboardCard2.png'),
    },
    {
      id: 3,
      name: (
        <Text className="text-black text-4xl font-bold">
          Real-Time Garage <Text style={{ color: '#284AE7' }}>Availability</Text>
        </Text>
      ),
      desciption: 'See which garages are full, available, and track peak parking times easily.',
      image: require('../../assets/images/onboardCard3.png'),
    },
  ];

  return (
    <View className="flex-1">
      <FlatList
        ref={flatRef}
        style={{ padding: 0, margin: 0 }}
        snapToInterval={windowWidth}
        decelerationRate="fast"
        snapToAlignment="center"
        horizontal
        data={onboardingData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ImageBackground
            source={item.image}
            style={{ width: windowWidth, height: windowHeight, paddingTop: '120%' }}
            className="justify-center items-center"
          >
            <Text className="pr-16">{item.name}</Text>
            {index === 0 && (
              <Text className="italic text-gray-500 self-start pl-6 mt-3">Swipe to discover more.</Text>
            )}
            <Text className="text-xl mt-3 p-3 text-center text-gray-700">{item.desciption}</Text>
            <Pressable
              style={{ backgroundColor: '#284AE7' }}
              className="py-3 px-10 mt-3 flex-row items-center justify-center gap-x-1 rounded-xl"
              onPress={() => router.push('/signup')}
            >
              <Text className="text-white font-bold">Get Started</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
            <Text className="mt-2 text-gray-500">
              Already have an account? <Text style={{ color: '#284AE7' }}>Log in</Text>
            </Text>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Onboarding;
