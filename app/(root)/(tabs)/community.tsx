// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function CommunityScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the Community</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import { Text, View } from 'react-native';

export default function CommunityScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Welcome to the Community</Text>
    </View>
  );
}
