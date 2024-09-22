// certificate.tsx

import { View, Text, StyleSheet } from "react-native";

export default function Certificate() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sertifikat</Text>

      <View style={styles.card}>
        <Text style={styles.certificateTitle}>Certified Scrum Master</Text>
        <Text style={styles.issuer}>Scrum Alliance</Text>
        <Text style={styles.date}>Diterbitkan: Mei 2021</Text>
        <Text style={styles.description}>
          Sertifikasi ini menunjukkan kemampuan dalam menerapkan metode Scrum untuk mengelola proyek dan tim secara efektif dalam pengembangan perangkat lunak.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.certificateTitle}>AWS Certified Solutions Architect</Text>
        <Text style={styles.issuer}>Amazon Web Services</Text>
        <Text style={styles.date}>Diterbitkan: Agustus 2020</Text>
        <Text style={styles.description}>
          Sertifikasi ini mengonfirmasi keahlian dalam merancang dan menerapkan solusi berbasis cloud dengan menggunakan layanan Amazon Web Services (AWS).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.certificateTitle}>Google Analytics Certification</Text>
        <Text style={styles.issuer}>Google</Text>
        <Text style={styles.date}>Diterbitkan: Desember 2019</Text>
        <Text style={styles.description}>
          Menguasai penggunaan Google Analytics untuk menganalisis data lalu lintas web dan menghasilkan laporan yang mendukung pengambilan keputusan bisnis.
        </Text>
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
  certificateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  issuer: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
