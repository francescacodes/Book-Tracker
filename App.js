import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "@theme";

export default function App() {
  return (
    <Provider store={Store}>
      <AppearanceProvider>
        <ThemeProvider>
          <StatefullApp />
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
