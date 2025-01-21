import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../Layout';

export default function HomePage() {
  return (
    <Layout>
      <View style={styles.center}>
        <Text>Home</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
