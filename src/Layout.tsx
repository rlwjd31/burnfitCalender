import React from 'react';

import {ReactNode} from 'react';
import {SafeAreaViewTW} from './components/common';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <SafeAreaViewTW className="flex-1 p-4 bg-teal-200">
      {children}
    </SafeAreaViewTW>
  );
}
