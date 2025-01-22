import React from 'react';

import Layout from '../../Layout';
import { TextTW, ViewTW } from '../common';


export default function CalendarPage() {
  return (
    <Layout>
      <ViewTW className="h-full items-center justify-center">
        <TextTW>Calendar</TextTW>
      </ViewTW>
    </Layout>
  );
}
