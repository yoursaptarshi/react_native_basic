import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Safe_area_view from '../components/Safe_area_view'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity>
        <Button onPress={()=>navigation.navigate('register')}>Register</Button>
      </TouchableOpacity>
    </View>
  )
}


export default Home