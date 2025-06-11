import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { COLORS } from '~/constants/colors';

import Input from './index';

import type { IInputProps } from './types';

const Password: React.FC<Omit<IInputProps, 'secureTextEntry'>> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  const eyeIcon = (
    <TouchableOpacity onPress={toggleVisibility}>
      <Icon color={COLORS.gray} name={isVisible ? 'eye' : 'eyeo'} size={20} />
    </TouchableOpacity>
  );

  return <Input {...props} secureTextEntry={!isVisible} suffix={eyeIcon} />;
};

export default Password;
