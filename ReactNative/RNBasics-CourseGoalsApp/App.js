import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import InputContainer from "./components/InputContainer";
import MyButton from "./components/MyButton";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <MyButton
          title="Add Goal"
          onPress={() => setIsOpenModal(true)} 
          bg="#051094"
        />
        <InputContainer
          setGoals={setGoals}
          isOpenModal={isOpenModal}
          closeModal={() => setIsOpenModal(false)}
        />
        <View style={styles.borderView} />
        <View style={styles.goalsContainer}>
          <>
            <Text
              style={{ textAlign: "center", marginBottom: 8, color: "#fff" }}
            >
              List of Goals...
            </Text>
            <FlatList
              alwaysBounceVertical={false}
              data={goals}
              renderItem={(renderedItem) => (
                <GoalItem renderedItem={renderedItem} setGoals={setGoals} />
              )}
              keyExtractor={(item) => item.id}
            />
          </>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  borderView: {
    height: 2,
    backgroundColor: "#1d19ff",
    marginVertical: 16,
  },
  goalsContainer: {
    flex: 11,
  },
});
