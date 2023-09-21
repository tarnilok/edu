import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ renderedItem, setGoals }) {
  function deleteGoalHandler() {
    // const restGoals = goals.filter((goal) => goal.id !== renderedItem.item.id);
    // setGoals(restGoals);
    setGoals((goals) =>
      goals.filter((goal) => goal.id !== renderedItem.item.id)
    );
  }
  return (
    <View style={styles.goalContainer}>
      <Pressable
        onPress={deleteGoalHandler}
        android_ripple={{ color: "#2e0a5c" }}
        style={({ pressed }) => pressed && styles.pressedContainer}
      >
        <Text style={styles.goalText}>{renderedItem.item.goalText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedContainer: {
    opacity: .5
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
