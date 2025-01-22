import React from 'react';

import {ViewProps, SafeAreaView} from 'react-native';
import {ClassInput} from 'twrnc';
import tw from '../../libs/tailwind';

type SafeAreaViewProps = ViewProps & {className?: ClassInput};

export default function SafeAreaViewTW({
  className = '',
  children,
  ...others
}: SafeAreaViewProps) {
  return (
    <SafeAreaView style={tw.style(className)} {...others}>
      {children}
    </SafeAreaView>
  );
}
