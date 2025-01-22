import React from 'react';

import {ViewProps, View} from 'react-native';
import {ClassInput} from 'twrnc';
import tw from '../../libs/tailwind';

type ViewTWProps = ViewProps & {className?: ClassInput};

export default function ViewTW({
  className = '',
  children,
  ...others
}: ViewTWProps) {
  return (
    <View style={tw.style(className)} {...others}>
      {children}
    </View>
  );
}
