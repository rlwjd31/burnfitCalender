import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../Layout';

export default function MyPage() {
  return (
    <Layout>
      <View style={styles.center}>
        <Text>MyPage</Text>
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
