import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#bb7195",
    borderRadius: 8,
    elevation: 10, // boxShadow for android
    shadowColor: "black",
    shadowOffset: { width: 4, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    width: 50,
    padding: 4,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "600",
    // textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
