import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { NativeBaseProvider, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

export default function Calls() {
  const contactsCalls = [
    {
      name: 'Ashir hussain',
      image: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      timeText: '28 min ago'
    },{
      name: 'Ali Hasan',
      image: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      timeText: 'Today, 5:27 PM'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      timeText: 'Yesterday, 9:56 PM'
    }]
  return (
    <ScrollView>
    {contactsCalls.map( calls =>
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={()=>{}}
    >
       <Image
          source={{
            uri: calls.image
          }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <View style={styles.statusTextView}>
      <Text style={styles.nameText}>{calls.name}</Text>
      <Text>{calls.timeText}</Text>
      </View>
      <View>
      <Icon size='8' style={styles.iconStyle}
        as={
        <Ionicons 
        name='call-outline'
      />
      } />
      </View>
    </TouchableOpacity>
  </View>)}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#DDDDDD",
    padding: 24,
    paddingLeft: 14,
    marginBottom: 2,
    marginLeft: 4,
    marginRight: 4
  },
  statusTextView: {
    marginLeft: 8,
    marginTop: 4
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700'
  },
  imageStyle: { 
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#09ba56'
  },
  iconStyle: {
    marginTop: 8,

  }
});