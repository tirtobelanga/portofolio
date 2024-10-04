import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName='profile'>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}