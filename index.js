/*function createLoginTracker(username, password) {
  //Created object from createLoginTracker function
  const userInfo = {
    username: username,
    password: password  
  };
  //Initialized attemptCount
  let attemptCount = 0;

  //loginAttempt arrow function. passwordAttemp is an argument passed as a 'string'
  const loginAttempt = (passwordAttempt) => {
    //Incrementing attemptCount by 1 after every check
    attemptCount++;
    //Checking conditions
    if (attemptCount > 3) {
      console.log('Account locked due to too many failed login attempts')
    } else if (passwordAttempt === userInfo.password){
      console.log(`Login successful`);
    } else {
      console.log(`Attempt ${attemptCount}: Login failed`);
    }
  };

  //Returned nested function
  return loginAttempt;
};

const tracker = createLoginTracker('rjescobedo', 'password123');
tracker('wrongpassword'); //attempt 1: login failed
tracker('anotherwrontpassword'); //attempt 2: login failed
tracker('password123'); // login successful!
tracker('password123'); //still works since this is the 3rd failed attempt
tracker('wrongpassword'); //account locked because of many failed attempts*/

//Since the mockUsers were created in index.test.js, using the code below for it
function createLoginTracker(userInfo) {
  // Initialize attemptCount
  let attemptCount = 0;

  // loginAttempt function
  const loginAttempt = (passwordAttempt) => {
    // Increment attemptCount
    attemptCount++;
    // Check if account is locked
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    }
    // Check for correct password
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }
    // If password is incorrect
    return `Attempt ${attemptCount}: Login failed`;
  };
  // Return loginAttempt function
  return loginAttempt;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};