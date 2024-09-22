export const checkValidData = (email, password, errorCode) => {
  // Regular expression for validating an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  // Regular expression for validating a password
  const passwordRegex = /^(?=.*[A-Za-z\d])[A-Za-z\d@$!%*?&]{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  const errors = {};

  // Check if fields are empty or invalid
  if (email === "") {
    errors.email = "Please enter your registered email address.";
  } else if (!isEmailValid) {
    errors.email = "Invalid email format. Please check and try again.";
  }

  if (password === "") {
    errors.password = "Please enter your password.";
  } else if (!isPasswordValid) {
    errors.password =
      "Password must be at least 8 characters long, containing at least one letter and one number.";
  }

  // Handle Firebase-specific errors
  if (errorCode) {
    switch (errorCode) {
      case "auth/email-already-in-use":
        errors.email =
          "This email is already registered. Please login or use a different email.";
        break;
      case "auth/invalid-credential":
        errors.password =
          "The username or password you entered is incorrect. Please try again.";
        break;
      case "auth/weak-password":
        errors.password =
          "Your password is too weak. Please choose a stronger password.";
        break;
      case "auth/invalid-email":
        errors.email =
          "The email format is incorrect. Please enter a valid email.";
        break;
      default:
        errors.general = "An error occurred. Please try again.";
    }
  }

  // Return errors object or null if there are no errors
  return Object.keys(errors).length ? errors : null;
};
