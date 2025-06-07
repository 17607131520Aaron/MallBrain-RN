import Toast from 'react-native-toast-message';

export enum EMessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

interface IMessageOptions {
  type: EMessageType;
  message: string;
  duration?: number;
}

export const showMessage = (options: IMessageOptions): void => {
  const { type, message, duration = 3000 } = options;

  Toast.show({
    type,
    text1: type.charAt(0).toUpperCase() + type.slice(1),
    text2: message,
    visibilityTime: duration,
    position: 'bottom',
  });
};
