import React from 'react';

import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {ClassInput} from 'twrnc';
import tw from '../../libs/tailwind';

type PressableTWProps = PressableProps & {
  className?: ClassInput;
  pressedClassName?: ClassInput; // pressed 상태일 때 사용할 클래스
};

export default function PressableTW({
  className = '',
  pressedClassName = '',
  children,
  ...others
}: PressableTWProps) {
  return (
    <Pressable
      {...others}
      style={({pressed}) => {
        const baseStyle: ViewStyle = tw.style(className);
        const pressedStyle: ViewStyle = pressed ? tw.style(pressedClassName) : {};
        return [baseStyle, pressedStyle];
      }}
    >
      {children}
    </Pressable>
  );
}
