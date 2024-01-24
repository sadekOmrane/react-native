import { StatusBar } from "expo-status-bar";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import * as React from "react";
import HomePage from "./screens/home.page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exercice3Page from "./screens/exercice3.page";
import Exercice4Page from "./screens/exercice4.page";
import Exercice5Page from "./screens/exercice5.page";
import Exercice6Page from "./screens/exercice6.page";
import Exercice7Page from "./screens/exercice7.page";
import Exercice8Page from "./screens/exercice8.page";
import DashboardPage from "./screens/dashboard.page";
import Exercice9Page from "./screens/exercice9.page";
import Exercice10Page from "./screens/exercice10.page";
import Exercice2Page from "./screens/exercice2.page";
import Exercice1Page from "./screens/exercice1.page";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Exercice1" component={Exercice1Page} />
          <Stack.Screen name="Exercice2" component={Exercice2Page} />
          <Stack.Screen name="Exercice3" component={Exercice3Page} />
          <Stack.Screen name="Exercice4" component={Exercice4Page} />
          <Stack.Screen name="Exercice5" component={Exercice5Page} />
          <Stack.Screen name="Exercice6" component={Exercice6Page} />
          <Stack.Screen name="Exercice7" component={Exercice7Page} />
          <Stack.Screen name="Exercice8" component={Exercice8Page} />
          <Stack.Screen name="Exercice9" component={Exercice9Page} />
          <Stack.Screen name="Exercice10" component={Exercice10Page} />
          <Stack.Screen name="Dashboard" component={DashboardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
