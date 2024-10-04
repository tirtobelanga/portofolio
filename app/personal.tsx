import { View, Text, StyleSheet } from "react-native";

export default function Personal() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Mudzy</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>Jl.Banteng Gg H.Safar RT.005/011 No.86</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>20</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>dzikryakbar8000@gmail.com</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>08889189194</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA', // Warna latar belakang yang lebih terang
  },
  header: {
    fontSize: 32, // Ukuran font lebih besar untuk kesan yang lebih kuat
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00695C', // Warna hijau yang lebih menyegarkan
    textAlign: 'center', // Header berada di tengah
    textShadowColor: '#A7FFEB', // Efek bayangan pada teks
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5, // Bayangan yang lebih lembut
    borderLeftWidth: 6, // Garis vertikal berwarna untuk estetika tambahan
    borderColor: '#00695C',
  },
  label: {
    fontSize: 16,
    color: '#00796B', // Warna yang sejalan dengan tema hijau
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40', // Warna yang lebih gelap untuk kontras
  },
});
