import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Result(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.resultTextContainer}>Your Result</Text>
        </View>
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.statusTextContainer}>
          <Text
            style={{
              margin: 10,
              fontSize: 30,
              color: props.statusColor,
            }}>
            {props.statusText}
          </Text>
          <Text style={styles.bmi}>{props.bmi}</Text>
          <Text style={styles.rangeText}>{props.rangeText}</Text>
          <Text style={styles.range}>{props.range} kg/m²</Text>
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}>
            {props.advice}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#28335c',
  },
  labelContainer: {
    padding: 20,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  resultContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#303a5e',
    padding: 15,
    marginTop: 0,
    margin: 25,
  },
  resultTextContainer: {color: 'white', fontSize: 25},
  statusTextContainer: {
    margin: 15,
    alignItems: 'center',
  },
  bmi: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    fontSize: 50,
  },
  rangeText: {margin: 10, fontSize: 20, color: 'grey'},
  range: {margin: 10, fontSize: 20, color: 'white'},
  advice: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Result;
