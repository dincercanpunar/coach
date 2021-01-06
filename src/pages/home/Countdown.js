import React, {useState, useEffect, Fragment, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {Text} from '@/components/common';
import {useTheme} from '@react-navigation/native';

const Circle = ({delay, backgroundColor}) => {
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scale, {
        toValue: 2,
        duration: 3000,
        delay: delay,
        useNativeDriver: true,
      }),
    ).start();

    Animated.loop(
      Animated.timing(opacity, {
        toValue: 0,
        duration: 3000,
        delay: delay,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.circle,
        {
          transform: [{scale}],
          opacity,
          backgroundColor,
        },
      ]}></Animated.View>
  );
};

const Countdown = () => {
  const [status, setStatus] = useState('work');
  const [time, setTime] = useState(1200);

  const {colors} = useTheme();

  useEffect(() => {
    const timer = setInterval(() => update(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  update = () => {
    if (time === 0) {
      if (status === 'work') {
        setTime(300);
        setStatus('relax');
      } else {
        setTime(1200);
        setStatus('work');
      }
    } else {
      setTime(time - 1);
    }
  };

  return (
    <Fragment>
      {Array(6)
        .fill()
        .map((_, index) => (
          <Circle
            key={index}
            delay={index * 500}
            backgroundColor={
              status === 'work' ? colors.successLight : colors.dangerLight
            }
          />
        ))}
      <Text
        extraStyle={{
          fontFamily: 'Audiowide-Regular',
        }}
        size="xxl">
        {secondsToMinutes(time)}
      </Text>
    </Fragment>
  );
};

const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  );
};

export default Countdown;

const styles = StyleSheet.create({
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    position: 'absolute',
  },
});
