import React from 'react';

import {TextProps, Text} from 'react-native';
import {ClassInput} from 'twrnc';
import tw from '../../libs/tailwind';

type TextTWProps = TextProps & {className?: ClassInput};

export default function TextTW({
  className = '',
  children,
  ...others
}: TextTWProps) {
  return (
    <Text style={tw.style(className)} {...others}>
      {children}
    </Text>
  );
}
