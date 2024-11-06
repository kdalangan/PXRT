
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'LOG IN' }} />
      <Stack.Screen name="signup" options={{ title: 'SIGN UP' }} />
      {/* Add more screens as needed */}
    </Stack>
  );
}