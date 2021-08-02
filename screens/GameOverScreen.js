import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MainButton } from "../components/MainButton";
import colors from "../constants/colors";
import Colors from "../constants/colors";

export const GameOverScreen = ({ userNumber, totalRounds, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverText}>The game is over.</Text>
      <Image
        fadeDuration={500}
        source={{
          uri: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        }}
        style={styles.image}
      />

      <Text style={styles.message}>
        Your phone needed <Text style={styles.highlight}>{totalRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverText: {
    fontSize: 18,
    fontFamily: "open-sans",
    color: colors.primary,
  },
  image: {
    width: "80%",
    height: 300,
    borderRadius: 15,
    marginVertical: 20,
  },
  message: {
    fontFamily: "open-sans-bold",
    width: "70%",
    textAlign: "center",
    marginBottom: 20,
  },
  highlight: {
    color: Colors.primary,
    fontSize: 18,
  },
});
