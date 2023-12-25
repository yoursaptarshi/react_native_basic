import { View } from 'react-native'
import React from 'react'
import Safe_area_view from '../components/Safe_area_view'
import { TextInput,Text, Button } from 'react-native-paper'

const Signin = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{marginBottom:25,fontSize:35}}>Login</Text>
      <TextInput placeholder='UserName'style={{marginBottom:25,padding:10,width:'70%'}}/>
      <TextInput placeholder='Password'style={{marginBottom:25,padding:10,width:'70%'}}/>
      <Button onPress={()=>navigation.navigate('home')}>Submit</Button>
    </View>
  )
}

export default Signin