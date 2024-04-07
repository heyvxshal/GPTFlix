export const checkValidData = (email, password, name) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    );

  const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  // If not valid return error string
  if (!isValidEmail) return "Email Id is not Valid!";
  if (!isValidPassword) return "Password is not Valid!";
  if (!isValidName) return "Please Enter valid Name (First name & Last name)";

  // No errors - return null
  return null;
};
