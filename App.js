import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chats from './Chats';
import Status from './Status';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (<>

    <NavigationContainer>
    <><Button title="Chats" /><Button title="Status"/>
    <Button title="Calls" /></>
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={Chats}
        // options={{ title: 'Chats' }}
      />
      <Stack.Screen name="Status" component={Status} />
    </Stack.Navigator>
  </NavigationContainer>
  </>
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
