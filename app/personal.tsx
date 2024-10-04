import { View, Text, StyleSheet } from "react-native";

export default function Personal() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Tirto Belanga</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>Jl.Jakarta Raya</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>27</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>tirtobelanga23@gmail.com</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>081234567890</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA', 
  },
  header: {
    fontSize: 32, 
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00695C', 
    textAlign: 'center', 
    textShadowColor: '#A7FFEB', 
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
    elevation: 5, 
    borderLeftWidth: 6, 
    borderColor: '#00695C',
  },
  label: {
    fontSize: 16,
    color: '#00796B', 
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40', 
  },
});
