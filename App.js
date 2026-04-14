// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
// import {  Text, View } from 'react-native';
// import Regions from './src/screens/Regions';
// import Welcome from './src/screens/Welcome';
// import Customer from './src/screens/Customer'
// const Stack=createNativeStackNavigator()
// export default function App() {
  

//   return (

//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='regions' component={Regions}/>
//            <Stack.Screen name='welcome' component={Welcome}/>
//            <Stack.Screen name='customer' component={Customer}/>
//         </Stack.Navigator>
//       </NavigationContainer>
  
    
//   );
// }


import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Navigation from "./Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}