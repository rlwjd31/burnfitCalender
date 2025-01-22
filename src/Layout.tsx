import React from 'react';

import {ReactNode} from 'react';
import {SafeAreaViewTW, ViewTW} from './components/common';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <SafeAreaViewTW className="flex-1">
      <ViewTW className="bg-teal-100">{children}</ViewTW>
    </SafeAreaViewTW>
  );
}
