import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import AppButton from '../Components/Button.component';
import Gender from './Gender.component';
import Height from './Height.component';
import Numeric from './Numeric.component';
import {
  UpdateBmi,
  UpdateWeight,
  UpdateHeight,
  UpdateAge,
  UpdateGender,
} from '../../store/actions';
class BmiHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maleColor: '#bf0b3e',
      femaleColor: 'grey',
      weight: 0,
      age: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.weight !== state.weight || props.age !== state.age) {
      return {
        weight: props.weight,
        age: props.age,
      };
    }
    return null;
  }

  calculateBMI = () => {
    const {weight, age, height, navigation} = this.props;
    if (weight === 0 || weight < 0) {
      alert('Choose a valid weight');
      return;
    }
    if (age === 0 || age < 0) {
      alert('Choose a valid age');
      return;
    }
    const bmi = weight / Math.pow(height / 100, 2);
    this.props.UpdateBmi(bmi.toFixed(1));
    navigation.push('BmiResult');
  };

  weightChanged = (weight) => {
    this.setState({weight});
    this.props.UpdateWeight(weight);
  };

  ageChanged = (age) => {
    this.setState({age});
    this.props.UpdateAge(age);
  };

  heightChanged = (height) => {
    this.props.UpdateHeight(parseInt(height));
    this.setState({height});
  };

  maleSelected = () => {
    this.props.UpdateGender('male');
    this.setState({
      maleColor: '#bf0b3e',
      femaleColor: 'grey',
    });
  };

  femaleSelected = () => {
    this.props.UpdateGender('female');
    this.setState({
      femaleColor: '#bf0b3e',
      maleColor: 'grey',
    });
  };

  render() {
    const {maleColor, femaleColor, weight, age} = this.state;
    const {height} = this.props;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.genderContainer}>
            <Gender gender="Male" color={maleColor} onTap={this.maleSelected} />
            <Gender
              gender="Female"
              color={femaleColor}
              onTap={this.femaleSelected}
            />
          </View>
          <Height height={height} onSlideHeight={this.heightChanged} />
          <View style={styles.genderContainer}>
            <Numeric
              type="Weight"
              value={weight}
              onChange={this.weightChanged}
            />
            <Numeric type="Age" value={age} onChange={this.ageChanged} />
          </View>
        </View>
        <AppButton title={'CALCULATE YOUR BMI'} onTap={this.calculateBMI} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#28335c',
  },
  genderContainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => {
  return {
    gender: state.bmi.gender,
    weight: state.bmi.weight,
    height: state.bmi.height,
    age: state.bmi.age,
  };
};

const mapDispatchToProps = {
  UpdateBmi,
  UpdateGender,
  UpdateHeight,
  UpdateWeight,
  UpdateAge,
};

export default connect(mapStateToProps, mapDispatchToProps)(BmiHome);
