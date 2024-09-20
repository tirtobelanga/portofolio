import { Text, View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { CustomeCard } from '@/components'

export default function Index() {
  const data = [
    {
      id:'1', 
      label:'Personal Details', 
      path:'/personal',
      description: 'Your personal information' // Tambahkan description
    },
    {
      id:'2', 
      label:'Experience', 
      path:'/experience',
      description: 'Your work experience' // Tambahkan description
    },
    {
      id:'3', 
      label:'Education', 
      path:'/education',
      description: 'Your educational background' // Tambahkan description
    },
    {
      id:'4', 
      label:'Certificate', 
      path:'/certificate',
      description: 'Your certificates' // Tambahkan description
    },
  ];

  return (
    <ScrollView>
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
        </View>

        {/* Bagian untuk menampilkan kartu */}
        <View style={styles.border}>
          <FlatList 
            data={data}
            renderItem={({item}) => 
              <CustomeCard 
                nama={item.label} 
                description={item.description} // Pastikan description ada
                path={item.path}
              /> 
            } 
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
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
    paddingRight: 25,
  }
});
