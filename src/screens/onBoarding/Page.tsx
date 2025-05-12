import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
const OnBoarding = () => {
  
    const pages = [
        {
            backgroundColor: '#fff',
            image: <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7vIJlEfpCd4PFAbSfn2Zo14Wzj4DdeIg2Q&s'}} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        {
            backgroundColor: '#fff',
            image: <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQaIio-s1evErq0H7JMYQSv27MMR3T9GESw&s'}} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        {
            backgroundColor: '#fff',
            image: <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_KzeAJ3T1XuTyatQO9x0xUV1Rsi92Ssy7w&s'}} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
    ]
  return (
    <AppIntroSlider
    data={pages}
    renderItem={()=><Text>dy</Text>}
  
  />
  )
}

export default OnBoarding