class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  // Getter method for password
  getPassword() {
    return '*'.repeat(this._password.length);
  }

  // Setter method for password
  setPassword(newPassword) {
    // Check if the new password is valid
    const isValid = this.validatePassword(newPassword);

    // If valid, set the new password; otherwise, log an error message
    if (isValid) {
      this._password = newPassword;
      console.log("Password has been updated successfully.");
    } else {
      console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
    }
  }

  // Helper method to validate the password
  validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLengthValid = password.length >= 8;

    return hasUpperCase && hasNumber && isLengthValid;
  }
}

// Test cases
const user = new User("Mithun", "Password123");
console.log(user.getPassword()); // Output: ***********
user.setPassword("myPassword");   // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassword("MyPassword");   // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassword("Mypassword123");
console.log(user.getPassword()); // Output: *************
