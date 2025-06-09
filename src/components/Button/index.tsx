import { throttle } from 'lodash';
import React, { memo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import styles from './index.style';

import type { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

export const BtnTypeEnum = {
  Default: 'default',
  PrimaryLine: 'primaryLine',
  Primary: 'primary',
  Warning: 'warning',
  Error: 'error',
  ErrorLine: 'errorLine',
  Cancel: 'cancel',
} as const;

type TBtnType = (typeof BtnTypeEnum)[keyof typeof BtnTypeEnum];

interface IButtonProps {
  children: React.ReactNode;
  type: TBtnType;
  isDisabled?: boolean;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  isBold?: boolean;
  iconProps?: Record<string, unknown>;
  isCustom?: boolean;
}

const Button = (props: IButtonProps): React.ReactElement => {
  const {
    children,
    type,
    isDisabled,
    isLoading,
    onPress,
    style,
    textStyle,
    isBold,
    iconProps,
    isCustom,
  } = props;
  const typeStyle = type ? styles[type] : styles[BtnTypeEnum.Default];
  const typeTextStyle = type ? styles[`${type}Text`] : styles[`${BtnTypeEnum.Default}Text`];
  const canPress = !isLoading && !isDisabled;

  const handlePress = canPress && onPress ? throttle(onPress, 1000) : undefined;

  return (
    <TouchableOpacity
      activeOpacity={canPress ? 0.2 : 1}
      style={isCustom && styles.customStyle}
      onPress={handlePress}
    >
      <View style={[styles.button, isDisabled && styles.disabled, typeStyle, style]}>
        {iconProps && null}
        {isLoading ? <ActivityIndicator color='#E0E2E7' size={20} style={styles.loading} /> : null}
        <Text style={[styles.text, typeTextStyle, isBold && styles.boldText, textStyle]}>
          {children ?? '确定'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);
