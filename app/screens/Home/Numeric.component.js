import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumericInput from 'react-native-numeric-input';

function Numeric(props) {
  const {type, value, onChange} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{type}</Text>
      <NumericInput
        rounded
        onChange={onChange}
        value={value}
        rightButtonBackgroundColor="#bf0b3e"
        leftButtonBackgroundColor="#bf0b3e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 30,
    alignItems: 'center',
  },
  textContainer: {margin: 15, fontSize: 20, color: 'white'},
});

export default Numeric;
