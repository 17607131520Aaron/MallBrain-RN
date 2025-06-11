import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}
