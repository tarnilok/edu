import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#54022a" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  pressableContainer: {
    backgroundColor: "#753a57",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "#54022a",
  },
});
