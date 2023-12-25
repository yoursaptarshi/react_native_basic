import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Signin from './screens/Signin';
import { Appbar } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './Store';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Appbar style={{backgroundColor:"#fa5846",paddingTop:20,marginTop:StatusBar.currentHeight}}>
      <Appbar.Content title="Samanta App"  />
      </Appbar>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='signin' component={Signin} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


