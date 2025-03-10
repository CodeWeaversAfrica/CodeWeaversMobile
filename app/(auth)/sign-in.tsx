// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/store';
// import { login } from '@/features/auth/authSlice';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   const { loading, error } = useSelector((state: RootState) => state.auth);

//   const handleLogin = () => {
//     dispatch(login({ email, password }));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       {error && <Text style={styles.error}>{error}</Text>}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Login" onPress={handleLogin} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 12,
//     textAlign: 'center',
//   },
// });

// export default LoginScreen;

import React from 'react';
import { Text, View } from 'react-native';

export default function SignIn()  {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Welcome  signin</Text>
    </View>
  );
}

