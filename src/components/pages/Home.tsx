import React from 'react';
import {View} from 'react-native';
import Layout from '../../Layout';
import defaultStyles from '../../styles/defaultStyles.style';
import TextTW from '../common/Text';

export default function HomePage() {
  return (
    <Layout>
      <View style={defaultStyles.center}>
        {/* testTextTW */}
        <TextTW className="text-blue">Home</TextTW>
      </View>
    </Layout>
  );
}
