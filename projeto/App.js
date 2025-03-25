import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
      height: 200,
      width: 50,
  },
});
