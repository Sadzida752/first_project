import  {StatusBar}  from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import  {createStackNavigator}  from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import {MainScreen}  from './screens/MainScreen';
import ListScreen from './screens/ListScreen';
import StudentsScreen from './screens/StudentsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='MenuScreen'
        screenOptions={
          {headerShown: false}
        }
      >
        <Stack.Screen 
          name="MenuScreen" 
          component={MenuScreen}
        />
         <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
        />
         <Stack.Screen 
          name="ButtonScreen" 
          component={ButtonScreen}
        />
         <Stack.Screen 
          name="MainScreen" 
          component={MainScreen}
        />
        <Stack.Screen 
          name="ListScreen" 
          component={ListScreen}
        />
        <Stack.Screen 
          name="StudentsScreen" 
          component={StudentsScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}