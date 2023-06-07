import { ChangeEvent } from "react";
import { useState } from "react";
import { isValidEmail } from "../utils/validation";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(isValidEmail(newEmail));
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        aria-label="email-input"
      />
      {!isValid && <p style={{ color: "red" }}>Invalid email address</p>}
    </div>
  );
};
