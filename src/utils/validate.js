export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassworkdValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassworkdValid) return "Password is not valid";

  return null;
};
