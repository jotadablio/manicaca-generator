import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import styles from './style';
import Svg, { Path, Text as SvgText, TextPath, Defs } from "react-native-svg";

export default function HomeScreen({ navigation }) {
    const [text, setText] = useState("MANICACA");

    const calculateFontSizeAndOffset = () => {
      const maxChars = 14; // Número máximo ideal de caracteres
      const baseFontSize = 18;
      const maxCurveLength = 300;
    
      // Tamanho da fonte ajustado
      const fontSize = Math.max(baseFontSize - (text.length > maxChars ? (text.length - maxChars) * 0.4 : 0), 14);
    
      // Comprimento estimado do texto
      const textLength = text.length * (fontSize * 0.59);
    
      // Deslocamento inicial para centralizar
      const offset = ((maxCurveLength - textLength) / 2 / maxCurveLength) * 100;
    
      return { fontSize, offset: `${Math.max(offset, 0)}%` };

  };

      const { fontSize, offset } = calculateFontSizeAndOffset();
  
      return (
        <ImageBackground
          source={require("../../assets/camo-pattern.jpg")} // Fundo camuflado
          style={styles.background}
        >
          <View style={styles.container}>
            {/* Modelo com texto curvado */}
            <View style={styles.previewContainer}>
              <ImageBackground
                source={require("../../assets/manicaca-template.jpg")} // Modelo da manicaca
                style={styles.manicacaTemplate}
                imageStyle={{ resizeMode: "contain" }}
              >
                <Svg height="150" width="250" viewBox="0 -12 250 100">
                  {/* Caminho curvo */}
                  <Path
                    d="M20,65 C100,10 150,10 230,65" // Ajuste o caminho para o formato exato
                    fill="none"
                    stroke="none"
                    id="curve"
                  />
                  <SvgText fill="#fff" fontSize={fontSize} fontWeight="bold">
                    <TextPath href="#curve" startOffset={offset} textAnchor="middle">
                      {text.toUpperCase()}
                    </TextPath>
                  </SvgText>
                </Svg>
              </ImageBackground>
            </View>
    
            {/* Campo de entrada de texto */}
            <TextInput
              style={styles.input}
              placeholder="Ex: MANICACA"
              placeholderTextColor="#ccc"
              value={text}
              onChangeText={setText}
            />
    
            {/* Botão de ação */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GERAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }