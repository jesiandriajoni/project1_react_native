import { Text, StyleSheet,Button, View, TouchableOpacity } from "react-native";

const ComponentPresentation = ({ onPress, counter, up, down, reset }) => {
  return (
    <>
      <View>
        <Text
          style={counter > 10 ? styles.textDanger : styles.text}
          onPress={() => onPress()}
        >
          Hello Component Presentation {counter}
        </Text>
      </View>

      <View style={{ marginTop: 50, width: "100%", paddingHorizontal: 16 }}>
        <TouchableOpacity onPress={() => reset()} style={styles.button}>
        <Text style={styles.buttonContent}>Rest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => up()} style={styles.button}>
        <Text style={styles.buttonContent}>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => down()} style={styles.button}>
        <Text style={styles.buttonContent}>Down</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#333",
    fontSize:32,
  },
  textDanger: {
    color: "red",
    fontSize: 32,
  },
  button:{
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginVertical: 16,
    
  },
  buttonContent:{
    color: "#fff",
    textAlign: "center",
    paddingHorizontal:18,
    paddingVertical:12,
    fontSize:16,
    fontWeight: "bold",
  },

});

export default ComponentPresentation;
