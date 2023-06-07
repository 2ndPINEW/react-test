import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Form } from "../components/form";
import { invalidEmailList, validEmailList } from "./patterns";

const setup = (email: string) => {
  const utils = render(<Form />);

  const input = screen.getByLabelText("email-input");
  // https://testing-library.com/docs/example-input-event/
  fireEvent.change(input, { target: { value: email } });

  return utils;
};

validEmailList.forEach((email) => {
  it(`${email}を入力するとエラーが表示されない`, () => {
    const { container } = setup(email);
    expect(container).not.toHaveTextContent("Invalid email address");
  });
});

invalidEmailList.forEach((email) => {
  it(`${email}を入力するとエラーが表示される`, () => {
    const { container } = setup(email);
    expect(container).toHaveTextContent("Invalid email address");
  });
});
