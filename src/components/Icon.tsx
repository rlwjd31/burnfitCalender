import React from 'react';

import Home from '../assets/icons/home.svg';
import Calendar from '../assets/icons/calendar.svg';
import Barbell from '../assets/icons/barbell.svg';
import User from '../assets/icons/user.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import ArrowRight from '../assets/icons/arrow-right.svg';

const IconComponent = {
  home: Home,
  calendar: Calendar,
  barbell: Barbell,
  user: User,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

type IconProps = {
  iconType: keyof typeof IconComponent;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
};

export default function Icon({
  iconType,
  width = 24,
  height = 24,
  fill = 'currentColor',
  stroke = 'none',
}: IconProps) {
  const SelectedIcon = IconComponent[iconType];

  return (
    <SelectedIcon width={+width} height={+height} fill={fill} stroke={stroke} />
  );
}
