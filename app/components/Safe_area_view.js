import { View, Text,StatusBar } from 'react-native'
import React from 'react'

const Safe_area_view = ({Component}) => {
  return (
    <View style={{paddingTop:StatusBar.currentHeight,paddingLeft:5,paddingRight:5}}>
      <Component/>
    </View>
  )
}

export default Safe_area_view