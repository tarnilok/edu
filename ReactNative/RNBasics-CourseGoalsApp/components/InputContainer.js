import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import MyButton from "./MyButton";

export default function InputContainer({ setGoals, isOpenModal, closeModal }) {
  const [goalText, setGoalText] = useState("");

  function addGoalHandler() {
    if (!goalText) return;
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        id: new Date().getTime(),
        goalText,
      },
    ]);
    setGoalText("");
    closeModal();
  }

  return (
    <Modal visible={isOpenModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={(enteredText) => setGoalText(enteredText)}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <MyButton title="Add Goal" onPress={addGoalHandler} />
          <MyButton title="Cancel" onPress={closeModal} bg="#000" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    paddingHorizontal: 30,
    backgroundColor: "#E7EAF0",
    marginTop: -100,
  },
  textInput: {
    width: "100%",
    borderWidth: 1.2,
    borderColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    gap: 12,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
