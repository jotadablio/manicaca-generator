import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../Options/style";

export default function OptionsScreen({ route }) {
  const { manicacaText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Texto da manicaca: {manicacaText}</Text>
      <Text style={styles.label}>Escolha o modelo e formato:</Text>
      {/* Aqui iremos adicionar os botões e opções mais tarde */}
    </View>
  );
}