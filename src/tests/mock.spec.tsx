/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Form } from "../components/form";

// ../utils/validation.ts をモックする
jest.mock("../utils/validation");
const mockValidation = require("../utils/validation");

const setup = () => {
  const utils = render(<Form />);

  const input = screen.getByLabelText("email-input");
  // FormのバリデーションがonChangeで実行されるので、適当に入力する
  fireEvent.change(input, { target: { value: "a" } });

  return utils;
};

it(`isValidEmail関数がtrueの場合はエラーが表示されない`, () => {
  // isValidEmail が true を返すように返り値をモックする
  mockValidation.isValidEmail.mockReturnValue(true);

  const { container } = setup();
  expect(container).not.toHaveTextContent("Invalid email address");
});

it(`isValidEmail関数がfalseの場合はエラーが表示される`, () => {
  // isValidEmail が false を返すように返り値をモックする
  mockValidation.isValidEmail.mockReturnValue(false);
  const { container } = setup();
  expect(container).toHaveTextContent("Invalid email address");
});
