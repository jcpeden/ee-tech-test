import Form from "../components/Form";
import { render, fireEvent } from "@testing-library/react";

const setup = () => {
  const utils = render(<Form />);
  const startValueInput = utils.getByLabelText("Start Value");
  const endValueInput = utils.getByLabelText("End Value");
  return {
    startValueInput,
    endValueInput,
    ...utils,
  };
};

test("Form should return an error when user inputs a string", () => {
  const { input } = setup();

  fireEvent.change(startValueInput, { target: { value: "aaa" } });

  expect(input.value).toBe("$23");
});
