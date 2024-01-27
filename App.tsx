import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import Players from "./components/Players/Players";
import Header from "./components/UI/Header";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poor-Story": require("./assets/fonts/PoorStory-Regular.ttf"),
    "Alfa-Slab-One": require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
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
      <Provider store={store}>
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
          </ImageBackground>
        </LinearGradient>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
