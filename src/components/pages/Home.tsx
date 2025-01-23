import React from 'react';
import Layout from '../../Layout';
import {TextTW, ViewTW} from '../common';

export default function HomePage() {
  return (
    <Layout>
      <ViewTW className="h-full items-center justify-center">
        <TextTW>Home</TextTW>
      </ViewTW>
    </Layout>
  );
}
