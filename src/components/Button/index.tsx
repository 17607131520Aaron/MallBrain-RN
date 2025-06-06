import React, { memo, isValidElement } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator, GestureResponderEvent } from 'react-native';
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

type BtnType = typeof BtnTypeEnum[keyof typeof BtnTypeEnum];

interface ButtonProps {
  children: React.ReactNode;
  type?: BtnType;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: any;
  style?: any;
  textStyle?: any;
  onPress?: (event: GestureResponderEvent) => void;
  bold?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type = BtnTypeEnum.Default,
    disabled,
    loading,
    containerStyle,
    style,
    textStyle,
    onPress,
    bold,
  } = props;

  const typeStyle = styles[type] || styles[BtnTypeEnum.Default];
  // 文案样式
  const typeTextStyle = styles[`${type}Text`] || styles[`${BtnTypeEnum.Default}Text`];
  const couldPress = !loading && !disabled;

  return (
    <TouchableOpacity
      activeOpacity={couldPress ? 0.2 : 1}
      style={containerStyle}
      onPress={couldPress ? (onPress ? throttle(onPress, 1000) : undefined) : undefined}
    >
      <View style={[styles.button, typeStyle, disabled && styles.disabled, style]}>
        {/*{iconProps ? <AsIcon {...iconProps} /> : null}*/}
        {loading ? (
          <ActivityIndicator color="#E0E2E7" size={20} style={styles.loading} />
        ) : null}
        {isValidElement(children) ? (
          children
        ) : (
          <Text style={[styles.text, typeTextStyle, bold && styles.boldText, textStyle]}>
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(Button);
