<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-box {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px gray;
      width: 300px;
      text-align: center;
    }
    .login-box h2 {
      margin-bottom: 20px;
    }
    .login-box input {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .login-box button {
      width: 95%;
      padding: 10px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .login-box button:hover {
      background: #45a049;
    }
    .error {
      margin-top: 10px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="login-box">
    <h2>Login</h2>
    <input type="char" id="R.snekha" placeholder="R.snekha">
    <input type="integer" id="1234" placeholder="1234">
    <button onclick="login()">Login</button>
    <p id="hello world" class="error"></p>
  </div>

  <script>
    function login() {
      // your login details
      let correctUsername = "R.snekha";
      let correctPassword = "1234";

      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      let msg = document.getElementById("message");

      if (user === correctUsername && pass === correctPassword) {
        msg.style.color = "green";
        msg.innerText = "✅ Login Successful! Welcome " + user;
        // Redirect to another page (example: home.html)
        // window.location.href = "home.html";
      } else {
        msg.style.color = "red";
        msg.innerText = "❌ Invalid Username or Password!";
      }
    }
  </script>

</body>
</html>
