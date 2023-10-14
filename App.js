import { StyleSheet } from "react-native";
import StackNavigation from "./Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "./Constraints/colors";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
        <StatusBar backgroundColor={COLOR.primary} />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
