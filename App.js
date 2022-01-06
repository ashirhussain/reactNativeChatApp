import * as React from 'react'
import Header from './components/Header'
import { 
  StyleSheet,
   Pressable,
    Animated,
     Dimensions      
     } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Chats from './components/Chats';
import Status from './components/Status';
import CameraComponent from './components/Camera';
import Calls from './components/Calls';
import { NativeBaseProvider, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

const renderScene = SceneMap({
  first: CameraComponent,
  second: Chats,
  third: Status,
  fourth: Calls

});

export default function App() {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'first', title: 'Camera' },
    { key: 'second', title: 'Chats' },
    { key: 'third', title: 'Status' },
    { key: 'fourth', title: 'Calls' },
  ]);
  const initialLayout = { width: Dimensions.get('window').width };
  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>{ route.key !== 'first' ? 
                <Animated.Text style={{ color }}>{route.title}</Animated.Text> :
                <Icon size='6' 
                  as={
                    <Ionicons 
                    name='camera-outline'
                  />
                } />
              } 
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <NativeBaseProvider>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: 5 }}
      />
    </NativeBaseProvider>
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
