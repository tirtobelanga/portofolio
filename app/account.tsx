import { Text, View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { CustomeCard } from '@/components'; // Asumsi bahwa komponen ini tersedia

export default function Index() {
  const data = [
    {
      id: '1',
      label: 'Personal Details',
      path: '/personal',
      description: 'Your personal information',
    },
    {
      id: '2',
      label: 'Experience',
      path: '/experience',
      description: 'Your work experience',
    },
    {
      id: '3',
      label: 'Education',
      path: '/education',
      description: 'Your educational background',
    },
    {
      id: '4',
      label: 'Certificate',
      path: '/certificate',
      description: 'Your certificates',
    },
    {
      id: '5',
      label: 'Admin Panel',
      path: '/(tabs)',
      description: 'Your certificates',
    },
  ];

  return (
    <ScrollView>
      <View>
        {/* Bagian atas dengan gambar dan informasi pribadi */}
        <View style={styles.container}>
          <Image 
            style={styles.tinyLogo} 
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          />
          <Text style={styles.textName}>Muhammad Dzikri</Text>
          <Text style={[styles.subText, styles.textWhite]}>dzikryakbar8000@gmail.com</Text>
        </View>

        {/* Bagian daftar kartu */}
        <View style={styles.contentContainer}>
          <Text style={styles.header}>Dashboard</Text>
          <FlatList 
            data={data}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <CustomeCard
                  nama={item.label}
                  description={item.description}
                  path={item.path}
                />
              </View>
            )}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  textName: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#A7FFEB', 
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  subText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  tinyLogo: {
    height: 100,
    width: 100,
    borderRadius: 50, // Membuat gambar menjadi bulat
    marginBottom: 10,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#E0F7FA',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00695C',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#A7FFEB', 
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 6,
    borderColor: '#00695C',
  },
});

