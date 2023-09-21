import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MyButton({ title, onPress, bg = "#5e0acc" }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: bg }}
      style={({ pressed }) => {
        return {
          ...(pressed && styles.pressedText),
          width: "100%",
        };
      }}
    >
      <View style={{ ...styles.buttonView, backgroundColor: bg }}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    padding: 12,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  pressedText: {
    opacity: 0.7,
  },
});
