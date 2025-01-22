import React from 'react';

import Layout from '../../Layout';
import {TextTW, ViewTW} from '../common';
import {now} from '../../constants/dayConstants';

export default function CalendarPage() {
  console.log('now =>', now);

  return (
    <Layout>
      <ViewTW className="h-full items-center justify-center">
        <TextTW>Calendar</TextTW>
      </ViewTW>
    </Layout>
  );
}
