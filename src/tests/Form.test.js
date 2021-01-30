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

test("It should output a string of numbers, replacing multiples of 15 with 'fizzbuzz, 5 with 'buzz' and 3 with 'fizz' respectively", () => {
  const { submit, startValueInput, endValueInput } = setup();

  // Setup initial values
  fireEvent.change(startValueInput, { target: { value: "1" } });
  fireEvent.change(endValueInput, { target: { value: "20" } });

  // Trigger submit
  fireEvent.click(submit);

  expect(screen.getByRole("aria-expanded")).toContainHTML(
    "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz"
  );
});
