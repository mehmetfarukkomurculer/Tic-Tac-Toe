import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import Players from "./components/Players/Players";
import Header from "./components/UI/Header";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import GameBoard from "./components/Game/GameBoard";


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poor-Story': require('./assets/fonts/PoorStory-Regular.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return undefined;
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient
        style={styles.appContainer}
        colors={[Colors.primary500, Colors.primary100]}
      >
        <ImageBackground
          source={require("./assets/background.jpg")}
          style={styles.appContainer}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}
        >
          <Header />
          <Players />
          <GameBoard />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
