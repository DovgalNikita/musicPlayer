// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import {Player} from './pages/Player';
// import {Player2} from './pages/Player2';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//           <Tab.Screen name="Player1" component={Player} options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="dropbox" color={color} size={size} />
//           ),
//         }}/>
//           <Tab.Screen name="Player2" component={Player2} />
//       </Tab.Navigator>

//       {/* <Stack.Navigator>
//         <Stack.Group>
//           <Stack.Screen name = "Player1" component={Player} options={{ title: 'Плеер1' }}/>
//           <Stack.Screen name = "Player2" component={Player2} options={{ title: 'Плеер2' }}/>
//         </Stack.Group>
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   )
// }

