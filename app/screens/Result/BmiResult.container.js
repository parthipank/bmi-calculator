import React from 'react';
import {connect} from 'react-redux';
import {ResetStore} from '../../store/actions';
import AppButton from '../Components/Button.component';
import Result from './Result.component';

class BmiResult extends React.Component {
  constructor(props) {
    super(props);
    let statusText, statusColor, rangeText, range, advice;

    if (this.props.bmi < 18.5) {
      statusText = 'Underweight';
      statusColor = 'orange';
      rangeText = 'Underweight BMI Range: ';
      range = '0 - 18.5';
      advice = 'Eat more healthy fats. Good Luck!';
    } else if (this.props.bmi >= 18.5 && this.props.bmi < 24.9) {
      statusText = 'Normal';
      statusColor = 'green';
      rangeText = 'Normal BMI Range: ';
      range = '18.5 - 24.9';
      advice = 'You have a normal body weight. Good Job!';
    } else if (this.props.bmi >= 25.0 && this.props.bmi < 29.9) {
      statusText = 'Overweight';
      statusColor = 'orange';
      rangeText = 'Overweight BMI Range: ';
      range = '25.0 - 29.9';
      advice = 'You are an overweighted person. Burn excess fats. Keep Trying!';
    } else if (this.props.bmi >= 30.0) {
      statusText = 'Obese';
      statusColor = 'red';
      rangeText = 'Obese BMI Range: ';
      range = 'Above 30.0';
      advice =
        'You are an obese person. Burn excess fats. Eat less. You can do it!';
    }

    this.state = {
      statusText,
      statusColor,
      rangeText,
      range,
      advice,
    };
  }

  recalculateBMI = () => {
    this.props.ResetStore();
    this.props.navigation.goBack();
  };
  render() {
    return (
      <>
        <Result
          statusText={this.state.statusText}
          statusColor={this.state.statusColor}
          rangeText={this.state.rangeText}
          range={this.state.range}
          advice={this.state.advice}
          bmi={this.props.bmi}
        />
        <AppButton
          title={'RE-CALCULATE YOUR BMI'}
          onTap={this.recalculateBMI}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bmi: state.bmi.bmi,
  };
};

const mapDispatchToProps = {
  ResetStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(BmiResult);
