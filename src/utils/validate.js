
export const checkValidData = (email, password) => {
    // Regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
  
    // Regular expression for validating a password
    const passwordRegex = /^(?=.*[A-Za-z\d])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
  
    // Initialize an empty errors object
    const errors = {};
  
    // Check if the email is valid
    if (!isEmailValid) {
      errors.email = "Invalid email address";
    }

    if (!isPasswordValid) {
      errors.password = "Password must be at least 8 characters long and contain at least one letter and one number";
    }
  
    // If there are no errors, return null
    if (Object.keys(errors).length === 0) {
      return null;
    }
  
    return errors;
  };
  