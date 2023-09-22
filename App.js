import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screen/LoginScreen';
import MainScreen from './src/screen/MainScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "grey"
          },
          headerTintColor: "white"
        }}>
          <Stack.Screen name="Login">
            {() => <LoginScreen/>}
          </Stack.Screen>
          <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
