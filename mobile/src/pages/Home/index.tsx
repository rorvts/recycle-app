import React from "react";
import { Feather as Icon } from "@expo/vector-icons"
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ImageBackground 
    source={require("../../assets/home-background.png")} 
    style={styles.container}
    imageStyle={{width: 274, height: 368 }}>
      <View style={styles.main}>
      <Image source={require("../../assets/logo.png")}/>
      <Text style={styles.title}>Your collection waste localized</Text>
      <Text style={styles.description}>We help people find collection points efficiently.</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFFFFF" size={24} />
          </View>
          <Text style={styles.buttonText}>
            Access
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;