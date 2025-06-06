import Toast from 'react-native-toast-message';

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

interface MessageOptions {
  message: string;
  type?: MessageType;
  duration?: number;
}

/**
 * 显示消息提示
 * @param options 提示选项
 * @param options.message 提示内容
 * @param options.type 提示类型，默认为 INFO
 * @param options.duration 显示时长（毫秒），默认为 2000
 */
export const showMessage = (options: MessageOptions) => {
  const { message, type = MessageType.INFO, duration = 2000 } = options;
  Toast.show({
    type,
    text1: message,
    position: 'top',
    visibilityTime: duration,
  });
};

/**
 * 显示成功提示
 * @param message 提示内容
 * @param duration 显示时长（毫秒）
 */
export const showSuccess = (message: string, duration?: number) => {
  showMessage({ message, type: MessageType.SUCCESS, duration });
};

/**
 * 显示错误提示
 * @param message 提示内容
 * @param duration 显示时长（毫秒）
 */
export const showError = (message: string, duration?: number) => {
  showMessage({ message, type: MessageType.ERROR, duration });
};

/**
 * 显示警告提示
 * @param message 提示内容
 * @param duration 显示时长（毫秒）
 */
export const showWarning = (message: string, duration?: number) => {
  showMessage({ message, type: MessageType.WARNING, duration });
};

/**
 * 显示普通提示
 * @param message 提示内容
 * @param duration 显示时长（毫秒）
 */
export const showInfo = (message: string, duration?: number) => {
  showMessage({ message, type: MessageType.INFO, duration });
};

/**
 * 隐藏提示
 */
export const hideToast = () => {
  Toast.hide();
};