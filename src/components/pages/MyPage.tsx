import React from 'react';

import Layout from '../../Layout';
import { TextTW, ViewTW } from '../common';

export default function MyPage() {
  return (
    <Layout>
      <ViewTW className="h-full items-center justify-center">
        <TextTW>MyPage</TextTW>
      </ViewTW>
    </Layout>
  );
}
