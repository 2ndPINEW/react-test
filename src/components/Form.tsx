import { ChangeEvent, isValidElement } from "react";
import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(isValidElement(newEmail));
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValid && <p style={{ color: "red" }}>Invalid email address</p>}
    </div>
  );
};
