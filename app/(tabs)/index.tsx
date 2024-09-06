import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.textName}>Tirto Belanga</Text>
      <Text style={[styles.subText, styles.textWhite]}>
        tirtobelanga23@mail.com
      </Text>
      <Link href="/experience">Experience</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E627C",
    height: 250,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  textName: {
    color: "white",
    fontSize: 24
  },
  subText: {
    fontSize: 14
  },
  textWhite: {
    color: "white"
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});
