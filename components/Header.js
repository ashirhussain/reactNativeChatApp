import * as React from 'react'
import { 
Box,
Text,
HamburgerIcon,
Menu,
Input,
Icon,
Pressable
} from 'native-base';
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
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

