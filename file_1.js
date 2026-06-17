/* Global Styles */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

/* Header Styles */

header {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

header nav li {
  margin-right: 20px;
}

header nav a {
  color: #fff;
  text-decoration: none;
}

/* Main Styles */

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
}

/* Payment Form Styles */

#payment-form {
  background-color: #f7f7f7;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#payment-form label {
  display: block;
  margin-bottom: 10px;
}

#payment-form input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#payment-form button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#payment-form button:hover {
  background-color: #3e8e41;
}

/* Transaction History Styles */

#transaction-history {
  margin-top: 20px;
}

#transaction-history ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#transaction-history li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

#transaction-history li:last-child {
  border-bottom: none;
}