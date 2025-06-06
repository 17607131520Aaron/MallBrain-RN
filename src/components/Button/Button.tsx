import React, { memo } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import { throttle } from 'lodash';
import styles from './index.style';

export const BtnTypeEnum = {
  Default: 'default',
  PrimaryLine: 'primaryLine',
  Primary: 'primary',
  Warning: 'warning',
  Error: 'error',
  ErrorLine: 'errorLine',
  Cancel: 'cancel',
} as const;

type BtnType = (typeof BtnTypeEnum)[keyof typeof BtnTypeEnum];

interface ButtonProps {
  children: React.ReactNode;
  type: BtnType;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: any;
  style?: any;
  textStyle?: any;
  onPress?: (event: GestureResponderEvent) => void;
  bold?: boolean;
  iconProps?: any;
  isCustom?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    disabled,
    loading,
    onPress,
    style,
    textStyle,
    bold,
    iconProps,
    isCustom,
  } = props;
  const typeStyle = type ? styles[type] : styles[BtnTypeEnum.Default];
  const typeTextStyle = type ? styles[`${type}Text`] : styles[`${BtnTypeEnum.Default}Text`];
  const couldPress = !loading && !disabled;
  return (
    <TouchableOpacity
      style={isCustom && styles.customStyle}
      activeOpacity={couldPress ? 0.2 : 1}
      onPress={couldPress ? (onPress ? throttle(onPress, 1000) : undefined) : undefined}
    >
      <View style={[styles.button, disabled && styles.disabled, typeStyle, style]}>
        {iconProps && null}
        {loading ? <ActivityIndicator color={'#E0E2E7'} size={20} style={styles.loading} /> : null}
        <Text style={[styles.text, typeTextStyle, bold && styles.boldText, textStyle]}>
          {children ?? '确定'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);
