// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
// -
// Registered Credential
let registered_username = "AashishBhai"
let registered_password = 987654321

// Login Credential Input
let username = "AashishBhai"
let password = 987654321

if(registered_username === username)
{
  if(registered_password === password)
  {console.log("Login Successful")}
  else
  {console.log("Password is Incorrect")}
}
else
{console.log("Username is Incorrect")}
