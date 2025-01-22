import React from 'react';

import {Text, View} from 'react-native';
import Layout from '../../Layout';
import defaultStyles from '../../styles/defaultStyles.style';

export default function CalendarPage() {
  return (
    <Layout>
      <View style={defaultStyles.center}>
        <Text>Calendar</Text>
      </View>
    </Layout>
  );
}
