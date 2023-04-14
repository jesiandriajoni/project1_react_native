import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ComponentPresentation from "./src/widgets/ComponentPresentation";


export default function App() {
  const [counter, setCounter] = useState(0);
  const up =()=>{
    setCounter(counter + 1);
  }

  const down =()=>{
    if(counter > 1){
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text onPress={()=> setCounter(counter + 1)}>Open up App.js horee bisa ges!</Text> */}
      <ComponentPresentation
      down={down}
      up = {up}
      reset ={()=> setCounter(0)}
      counter={counter}
      onPress={()=> setCounter(counter + 1)}
      />
      <StatusBar style="auto" />
    
    </View>
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
