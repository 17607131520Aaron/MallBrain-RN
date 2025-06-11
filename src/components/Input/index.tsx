import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { COLORS } from '~/constants/colors';

import styles from './index.style';
import Password from './Password';

import type { IInputProps } from './types';

interface IInput extends React.FC<IInputProps> {
  Password: typeof Password;
}

const Input: IInput = ({
  placeholder,
  value = '',
  onChangeText,
  prefix,
  suffix,
  allowClear = false,
  disabled = false,
  error,
  label,
  required = false,
  maxLength,
  secureTextEntry = false,
  autoCapitalize = 'none',
  keyboardType = 'default',
  loading = false,
  style,
  inputStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChangeText = (text: string): void => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleClear = (): void => {
    setInputValue('');
    if (onChangeText) {
      onChangeText('');
    }
  };

  const renderPrefix = (): React.ReactNode | null => {
    if (!prefix) return null;
    return <View style={styles.prefixContainer}>{prefix}</View>;
  };

  const renderSuffix = (): React.ReactNode | null => {
    if (loading) {
      return (
        <View style={styles.suffixContainer}>
          <ActivityIndicator color={COLORS.primary} size='small' />
        </View>
      );
    }

    if (allowClear && inputValue) {
      return (
        <TouchableOpacity style={styles.suffixContainer} onPress={handleClear}>
          <Icon color={COLORS.gray} name='close-circle' size={16} />
        </TouchableOpacity>
      );
    }

    if (!suffix) return null;
    return <View style={styles.suffixContainer}>{suffix}</View>;
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <View style={styles.labelContainer}>
          {required && <Text style={styles.requiredMark}>*</Text>}
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedContainer,
          error && styles.errorContainer,
          disabled && styles.disabledContainer,
        ]}
      >
        {renderPrefix()}
        <TextInput
          autoCapitalize={autoCapitalize}
          editable={!disabled}
          keyboardType={keyboardType}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={secureTextEntry}
          style={[
            styles.input,
            prefix ? styles.inputWithPrefix : undefined,
            suffix || allowClear || loading ? styles.inputWithSuffix : undefined,
            disabled && styles.disabledInput,
            inputStyle,
          ]}
          value={inputValue}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
        />
        {renderSuffix()}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// 添加Password子组件
Input.Password = Password;

export default Input;
