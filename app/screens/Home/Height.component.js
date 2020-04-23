import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

function Height(props) {
  const {height, onSlideHeight} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
        }}>
        <Text style={styles.textContainer}>Height</Text>
        <Text style={styles.textContainer}>{parseInt(height)}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={20}
        maximumValue={250}
        value={props.height}
        onValueChange={onSlideHeight}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#303a5e',
    padding: 15,
  },
  textContainer: {margin: 10, fontSize: 20, color: 'white'},
  slider: {width: 180, height: 25, margin: 10},
});

export default Height;
