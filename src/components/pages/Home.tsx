import React from 'react';

import {Text, View} from 'react-native';
import Layout from '../../Layout';
import defaultStyles from '../../styles/defaultStyles.style';

export default function HomePage() {
  return (
    <Layout>
      <View style={defaultStyles.center}>
        <Text>Home</Text>
      </View>
    </Layout>
  );
}
