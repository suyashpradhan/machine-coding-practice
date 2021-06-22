import { useState } from "react";

export const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    if (password === confirmPassword) {
      setErrors("All Good");
    } else {
      setErrors("Password Doesn't Match");
    }
  };

  return (
    <div>
      <form>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

        <p>{errors}</p>
      </form>
    </div>
  );
};
