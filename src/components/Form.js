import React from "react";
import Paragraph from "./Paragraph";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideError: true,
      hideOutput: true,
      valid: false,
      startValue: 0,
      endValue: 0,
      output: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "start-value") {
      this.setState({ startValue: parseInt(event.target.value) });
    } else {
      this.setState({ endValue: parseInt(event.target.value) });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // If valid, process form else return an error message
    if (this.validateInputs()) {
      const range = this.rangeBetween();
      const output = this.parseFizzBuzz(range);
      this.setState({ hideError: true, hideOutput: false, output: output });
    } else {
      this.setState({ hideError: false, hideOutput: true });
    }
  }

  // Check inputs are not empty, are numbers and that start is smaller than end value
  validateInputs() {
    if (
      isNaN(this.state.startValue) ||
      isNaN(this.state.endValue) ||
      this.state.startValue > this.state.endValue
    ) {
      return false;
    }

    return true;
  }

  // Return range array between two integers
  rangeBetween() {
    const range = [];

    for (let i = this.state.startValue; i <= this.state.endValue; i++) {
      range.push(i);
    }

    return range;
  }

  // Replace specific multiples with strings
  parseFizzBuzz(array) {
    const parsed = array.map((x) => {
      if (x % 15 === 0) {
        return "fizzbuzz";
      } else if (x % 5 === 0) {
        return "buzz";
      } else if (x % 3 === 0) {
        return "fizz";
      }

      return x;
    });

    // Convert array to string
    const string = parsed.toString();

    // Fix whitespace and return
    const updated = string.replaceAll(",", ", ");

    return updated;
  }

  render() {
    return (
      <div className="form">
        <h2>{this.props.title}</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__row">
            <label htmlFor="start-value" className="form__label">
              Start Value
            </label>
            <input
              required
              type="number"
              name="start-value"
              id="start-value"
              className="form__field form__input"
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row">
            <label htmlFor="end-value" className="form__label">
              End Value
            </label>
            <input
              required
              type="number"
              name="end-value"
              id="end-value"
              className="form__field form__input"
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row">
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>

        <Paragraph
          hide={this.state.hideError}
          isError="true"
          content="Please check your inputs are valid and try again"
        />

        <Paragraph hide={this.state.hideOutput} content={this.state.output} />
      </div>
    );
  }
}

export default Form;
