import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';
import { CustomeCard } from '@/components'; // Pastikan jalur impor sudah benar

export default function Index() {
  return (
    <View>
      <View style={styles.container}>
        <Image 
          style={styles.tinyLogo} 
          source={{
            uri : 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.textName}>
          Tirto Belanga
        </Text>
        <Text style={[styles.subText, styles.textWhite]}>
          tirtobelanga23@gmail.com
        </Text>
        <Link href="/experience" style={[styles.subText, styles.textWhiteLink]}>
          Experience
        </Link>
      </View>

      {/* Bagian untuk menampilkan kartu */}
      <View style={styles.border}>
        <CustomeCard nama="Tirto"/>
        <CustomeCard nama="Belanga" />
        <CustomeCard nama="Iya"/>
      </View>
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
    alignItems: "center",
  },
  textName: {
    color: "white",
    fontSize: 24,
  },
  subText: {
    fontSize: 14,
  },
  textWhite: {
    color: "white",
  },
  textWhiteLink: {
    color: "white",  
    textDecorationLine: 'underline',  
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  border: {
    marginTop: -25,
    paddingLeft: 20,
    paddingRight:25,
}
});