import Form from "../components/Form";
import { render, fireEvent, getByRole } from "@testing-library/react";

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

test("It should update start value when end value input changes", () => {
  const { startValueInput } = setup();
  fireEvent.change(startValueInput, { target: { value: "12" } });

  expect(startValueInput.value).toBe("12");
});

test("It should update end value when end value input changes", () => {
  const { endValueInput } = setup();
  fireEvent.change(endValueInput, { target: { value: "25" } });

  expect(endValueInput.value).toBe("25");
});

test("It should error if user enters invalid start/end value data", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "25" } });
  fireEvent.change(endValueInput, { target: { value: "12" } });

  // Trigger submit
  fireEvent.click(submit);

  // Expect error output to be shown
  expect(getByRole("aria-errormessage")).toBeVisible();
});

test("It should display an error message if start value is greater than end value", () => {
  expect(true).toBe(false);
});

test("It should output a string of numbers, replacing multiples of 15 with 'fizzbuzz'", () => {
  expect(true).toBe(false);
});

test("It should output a string of numbers, replacing multiples of 5 (but not 15) with 'buzz'", () => {
  expect(true).toBe(false);
});

test("It should output a string of numbers, replacing multiples of 3 (but not 15) with 'fizz'", () => {
  expect(true).toBe(false);
});
