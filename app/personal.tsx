// personal.tsx

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
        <Text style={styles.value}>Jl. Merdeka No. 123, Jakarta</Text>
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
        <Text style={styles.value}>+62 812 3456 7890</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0E627C',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
