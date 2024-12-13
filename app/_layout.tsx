import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Cart" />
    </Stack>
    </Provider>
  );
}
