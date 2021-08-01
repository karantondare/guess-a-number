import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const GameOverScreen = ({ userNumber, totalRounds, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over</Text>
      <Text>Number was: {userNumber}</Text>
      <Text>Number of rounds: {totalRounds}</Text>
      <Button title="START NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
