import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

export default function Chats() {
  const contacts = [
    {
      name:'Ashir hussain',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'10:45am'
    },{
      name:'Ali Hasan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'11:45am'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },
    ,{
      name:'Ammar khan',
      image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
      time:'12:00pm'
    },]
  return (
    <ScrollView>
    {contacts.map( contact =>
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={()=>{}}
    >
       <Image
          source={{
            uri: contact.image
          }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      <Text>{contact.name}</Text>
      <Text>{contact.time}</Text>
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
    marginBottom: 2,
    marginLeft: 4,
    marginRight: 4
  }
});
