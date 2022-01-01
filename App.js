import * as React from 'react'
import { 
  StyleSheet,
   Pressable,
    Animated,
     Dimensions,
     Keyboard,
     StatusBar       
     } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Chats from './components/Chats';
import Status from './components/Status';
import Calls from './components/Calls';
import { NativeBaseProvider, Box, Text, Center, HamburgerIcon, Menu, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

const renderScene = SceneMap({
  first: Chats,
  second: Status,
  third: Calls

});
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchText, setSearchText] = React.useState('')
  const inputElement = React.useRef(null)
  const handleTextInputClick = () => {
    setIsSearchOpen(!isSearchOpen)
    inputElement.current.focus()
  }
  return (
  <Box h='12%' w='100%' backgroundColor='#ffffff' display='flex' flexDirection='row'>
{isSearchOpen ?
  <Icon size='6' marginLeft='4' marginTop='10' 
    as={
      <Ionicons 
      name='arrow-back-outline'
      onPress={()=>{
        setIsSearchOpen(!isSearchOpen)
        inputElement.current.blur()
      }}
    />
  } /> : 
  <Text 
  color='#000000'
  fontSize='20'
  marginTop='8'
  marginRight='40'
  marginLeft='4'
  >
    WhatsApp
  </Text>}
<Input 
  width={isSearchOpen ? '90%' : '10'}
  marginTop={isSearchOpen ? '8' : '0'}
  height={isSearchOpen ? '10' : '24'}
  paddingLeft={isSearchOpen ? '6' : '2'}
  ref={inputElement}
  fontSize='md'
  onPress={()=>{
    handleTextInputClick()
   }}
  borderWidth='0'
  InputRightElement={
  <Icon size='6' marginRight='4' as={
    <Ionicons 
    name='ios-search'
    onPress={()=>{
     handleTextInputClick()
    }}
    />
  } />
 }
 />
<Menu w='190' trigger={(triggerProps) => {
  return (
  <Pressable accessibilityLabel='More options menu' {...triggerProps}>
    {!isSearchOpen && <HamburgerIcon marginTop='8' marginLeft='4'/>}
  </Pressable>
  )
}}>
  <Menu.Item>settings</Menu.Item>
  <Menu.Item>settings11</Menu.Item>
  <Menu.Item>settings222</Menu.Item>
  <Menu.Item>settings333</Menu.Item>
  <Menu.Item>settings4444</Menu.Item>
</Menu>
  </Box>
  )
}

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Chats' },
    { key: 'second', title: 'Status' },
    { key: 'third', title: 'Calls' },
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
                }}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
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
