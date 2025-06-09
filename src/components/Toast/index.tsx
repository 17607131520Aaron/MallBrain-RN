import { Component } from 'react';
import { Animated, View } from 'react-native';

import styles from './index.style';

interface IAddToastProps {
  delete?: (result: { finished: boolean }) => void;
  children: React.ReactNode;
}

interface IAddToastState {
  fadeAnim: Animated.Value;
}

class AddToast extends Component<IAddToastProps, IAddToastState> {
  constructor(props: IAddToastProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount(): void {
    Animated.sequence([
      // 使用宽松函数让数值随时间动起来。
      Animated.timing(
        // 随时间变化而执行动画
        this.state.fadeAnim, // 动画中的变量值
        {
          toValue: 1, // 透明度最终变为1，即完全不透明
          duration: 500, // 让动画持续一段时间
          useNativeDriver: true,
        },
      ),
      Animated.delay(4000),
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start((res) => {
      this.props.delete?.(res);
    });
  }

  render(): React.ReactNode {
    const { fadeAnim } = this.state;
    const opacity = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const translateY = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    });
    return (
      <Animated.Text
        style={[
          styles.toastText,
          {
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}

interface IToastItem {
  text: string;
  value: React.ReactNode;
}

interface IToastViewState {
  toastList: IToastItem[];
}

class ToastView extends Component<Record<string, never>, IToastViewState> {
  private static instance: ToastView | null = null;

  constructor(props: Record<string, never>) {
    super(props);
    ToastView.instance = this;
    this.state = {
      toastList: [],
    };
    this.deleteToast = this.deleteToast.bind(this);
  }

  static add = (value: string): void => {
    if (!ToastView.instance) return;

    const { toastList } = ToastView.instance.state;
    let isToastAddable = true;

    toastList.forEach((item) => {
      if (item.text === value) {
        isToastAddable = false;
      }
    });

    if (isToastAddable) {
      toastList.push({
        text: value,
        value: (
          <AddToast key={key} delete={ToastView.instance.deleteToast}>
            {value}
          </AddToast>
        ),
      });
      key++;
      ToastView.instance.setState({ toastList });
    }
  };

  deleteToast(): void {
    const { toastList } = this.state;
    toastList.splice(0, 1);
    this.setState({ toastList });
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.state.toastList.map((item) => {
          return item.value;
        })}
      </View>
    );
  }
}

let key = 0;
export default ToastView;
