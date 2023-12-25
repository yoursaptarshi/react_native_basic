import {  View} from 'react-native'
import React, { useState } from 'react'
import { TextInput,Text, Button, Checkbox } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Actions/user';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [name,setName] =useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const submitHandler = ()=>{
    if(name==''||username==''||password==''){
      //ToastAndroid.show("enter valid credintials!",ToastAndroid.SHORT)
    }
    else{
      dispatch(register(name,username,password));
    navigation.navigate("signin");
    }
    
  }
  
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{marginBottom:25,fontSize:35}}>Register</Text>
      <TextInput placeholder='Name' value={name} onChangeText={(text) => setName(text)} style={{marginBottom:25,padding:10,width:'70%'}}/>
      <TextInput placeholder='UserName' value={username} onChangeText={(text)=>setUsername(text)} style={{marginBottom:25,padding:10,width:'70%'}}/>
      <TextInput placeholder='Password'value={password} onChangeText={(text)=>setPassword(text)} style={{marginBottom:25,padding:10,width:'70%'}}/>
      
      <Button onPress={()=>{submitHandler()}}>Submit</Button>
    </View>
  )
}

export default Register