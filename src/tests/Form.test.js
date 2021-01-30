import Form from "../components/Form";
import { screen, render, fireEvent } from "@testing-library/react";

// Render new instance in every test to prevent leaking state
const setup = () => {
  const utils = render(<Form />);
  const submit = utils.getByLabelText("submit");
  const startValueInput = utils.getByLabelText("Start Value");
  const endValueInput = utils.getByLabelText("End Value");
  return {
    submit,
    startValueInput,
    endValueInput,
    ...utils,
  };
};

test("It should display an error message if start value is greater than end value", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "25" } });
  fireEvent.change(endValueInput, { target: { value: "12" } });

  // Trigger submit
  fireEvent.click(submit);

  // Expect error message to be shown
  expect(screen.getByRole("aria-errormessage")).toBeVisible();
});

test("It should output a string of numbers, replacing multiples of 15 with 'fizzbuzz'", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "14" } });
  fireEvent.change(endValueInput, { target: { value: "16" } });

  // Trigger submit
  fireEvent.click(submit);

  expect(screen.getByRole("aria-expanded")).toContainHTML("14, fizzbuzz, 16");
});

test("It should output a string of numbers, replacing multiples of 5 (but not 15) with 'buzz'", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "9" } });
  fireEvent.change(endValueInput, { target: { value: "11" } });

  // Trigger submit
  fireEvent.click(submit);

  expect(screen.getByRole("aria-expanded")).toContainHTML("fizz, buzz, 11");
});

test("It should output a string of numbers, replacing multiples of 3 (but not 15) with 'fizz'", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "3" } });
  fireEvent.change(endValueInput, { target: { value: "5" } });

  // Trigger submit
  fireEvent.click(submit);

  expect(screen.getByRole("aria-expanded")).toContainHTML("fizz, 4, buzz");
});
