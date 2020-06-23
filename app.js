//-----------CHAPTER 21-25--------------
//TASK 1
/*var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName + " " + lastName;
alert(fullName + " welcome to our website");

//TASK 2
var favMob = prompt("please enter your favourite mobile model");
var l = favMob.length;
document.write(
  "Your favourite phone is: " + favMob + "<br>Length of string is: " + l
);

//TASK 3
var str = "Pakistani";
var x = str.indexOf("n");
document.write("String: " + str + "<br>Index of n: " + x);

//TASK 4
var str = "Hello World";
var x = str.lastIndexOf("l");
document.write("String: " + str + "<br>Last index of l: " + x);

//TASK 5
var str = "Pakistani";
var x = str.charAt(3);
document.write("String: " + str + "<br>Character at index 3: " + x);

//TASK 6
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName.concat(" ", lastName);
alert(fullName + " welcome to our website");

//TASK 7
var str = "Hyderabad";
var str2 = str.replace("Hyder", "Islam");
document.write("City: " + str + "<br>After replacement: " + str2);

//TASK 8
var message =
  "Ali and Sami are best friends.They play cricket and football together.";
var message2 = message.replace(/and/g, "&");
document.write("Message: " + message + "<br>After replacement: " + message2);

//TASK 9
var str = "472";
var num = parseInt(str);
document.write(
  "Value: " +
    str +
    "<br>Type: " +
    typeof str +
    "<br>Value: " +
    num +
    "<br>Type: " +
    typeof num
);

//TASK 10
var str = prompt("enter some text");
var str2 = str.toUpperCase();
document.write("User input: " + str + "<br>Upper case: " + str2);

//TASK 11
var str = prompt("enter some text");
str = str.toLowerCase();
document.write(
  "User input: " +
    str +
    "<br>Title case: " +
    str[0].toUpperCase() +
    str.slice(1, str.length)
);

//TASK 12
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Number:" + num + "<br>Result:" + str);

//TASK 13
var user_name = prompt("enter username");
for (var i = 0; i < user_name.length; i++) {
  if (
    user_name[i].charCodeAt() === 33 ||
    user_name[i].charCodeAt() === 44 ||
    user_name[i].charCodeAt() === 46 ||
    user_name[i].charCodeAt() === 64
  ) {
    user_name = prompt("please enter a valid username");
  }
}

//TASK 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to our bakery. What do you want to order?");
var c = 0;
order = order.toLowerCase();
for (var i = 0; i < A.length; i++) {
  if (A[i] === order) {
    document.write(order + " is available at index " + i + " in our bakery");
    c = 1;
    break;
  }
}
if (c === 0) {
  document.write("We are sorry " + order + " is not available in our bakery.");
}

//TASK 15
var password = prompt("Enter a password");
var c = 0;
for (var i = 0; i < password.length; i++) {
  if (password.length >= 6) {
    if (
      ((password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) ||
        (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122)) &&
      password[i].charCodeAt() >= 48 &&
      password[i].charCodeAt() <= 57
    ) {
      if (
        i === 0 &&
        password[0].charCodeAt() >= 48 &&
        password[0].charCodeAt() <= 57
      ) {
        document.write(
          "First character cannot begin a number<br>please enter a valid password"
        );
        c = 1;
        break;
      }
    } else {
      document.write(
        "password must have both number and alphabets<br>please enter a valid password"
      );
      c = 1;
      break;
    }
  } else {
    document.write(
      "password must have atleast 6 characters<br>please enter a valid password"
    );
    c = 1;
    break;
  }
}
if (c === 0) {
  document.write("password confirmed");
}

//TASK 16
var university = "University of Karachi";
university = university.split("");
for (var i = 0; i < university.length; i++) {
  document.write(university[i] + "<br>");
}

//TASK 17
var input = prompt("Enter any string");
document.write(
  "User input: " +
    input +
    "<br>Last character of input: " +
    input[input.length - 1]
);

//TASK 18
var str = "The quick brown fox jumps over the lazy dog";
var str2 = str.toLowerCase();
var c = 0;
for (var i = 0; i < str2.length; i++) {
  if (str2[i] === "t" && str2[i + 1] === "h" && str2[i + 2] === "e") {
    c++;
  }
}
document.write(
  "Text: " + str + "<br>There are " + c + " occurrence of word 'the' "
);

//-----------CHAPTER 26-30--------------
//TASK 1
var num = prompt("enter a positive integer");
document.write(
  "number: " +
    num +
    "<br>round off value: " +
    Math.round(num) +
    "<br>floor value: " +
    Math.floor(num) +
    "<br>ceil value: " +
    Math.ceil(num)
);

//TASK 2
var num = prompt("enter a negative floating integer");
document.write(
  "number: " +
    num +
    "<br>round off value: " +
    Math.round(num) +
    "<br>floor value: " +
    Math.floor(num) +
    "<br>ceil value: " +
    Math.ceil(num)
);

//TASK 3
var num = prompt("enter a number");
document.write("the absolute value of " + num + " is " + Math.abs(num));

//TASK 4
document.write("random dice value " + Math.round(Math.floor() * 6)+1);

//TASK 5
var num = Math.floor(Math.random() * 2 + 1);
if (num === 2) {
  document.write(num + "<br>random coin values:Heads");
} else {
  document.write(num + "<br>random coin values:Tails");
}

//TASK 6
document.write(
  "random number between 1 and 100: " + Math.floor(Math.random() * 100 + 1)
);*/

//TASK 7
var weight = prompt("Enter weight:");
let w = weight.match(/[0-9 .]*/);
document.write("THe weight of user is ", w[0], " kilograms");

//TASK 8
/*var secret = prompt('Enter secret Number ?');
var random = Math.random() * 10 + 1;

if (secret == random) {
  alert("Congratulations! Matched");
}
else {
  alert("Try Again!");
}


//-----------CHAPTER 31-34--------------
//TASK 1
document.write(new Date());

//TASK 2
let months = ['January', 'Feruary', 'March',
  'April', "May", 'June', 'July', "August", 'September',
  'October', 'November', 'December'];

document.write("<br><br></br>Current Month : ", months[new Date().getMonth()]);

//TASK 3
let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
document.write("<br><br></br>Today is ", days[new Date().getDay()]);


//TASK 4
if (new Date().getDay() === 5 || new Date().getDay() === 6) {
  document.write("<br><br></br>It's Fun day");
}


//TASK 5
if (new Date().getDate() < 16) {
  document.write("<br><br></br>First fifteen days of the month");
}
else {
  document.write("<br><br></br>Last days of the month.");
}

//TASK 6
document.write("<br><br></br>Current Date", new Date());
document.write("<br><br></br>Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
document.write("<br><br></br>Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));


//TASK 7
if (new Date().getHours < 13) {
  document.write("<br><br></br>It's AM");
}
else {
  document.write("<br><br></br>It's PM");
}

//TASK 8
document.write("<br><br></br>Later Date : ", new Date(2020, 4, 30));



//TASK 9
let ramadan = new Date(2020, 3, 25).getTime();
let today1 = new Date().getTime();

document.write("<br>", Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");


//TASK 10
let diff = new Date("Dec 5, 2015").getTime();
let today = new Date().getTime();
let result = (diff - today);
document.write("<br><br>", result, " seconds has passed since beginning of 2015");

//TASK 11
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getHours() - 1);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//TASK 12
var date_now = new Date();
document.write("<br><br></br>Current Date : ", date_now);
var one_hour = new Date();
one_hour.setHours(date_now.getFullYear() - 100);
document.write("<br><br></br>1 hour ago, it was ", one_hour);


//TASK 13
var age = prompt("Enter your age");
document.write("<br><br></br>Your age is ", age);
document.write("<br><br></br>Your birth Year is  :", new Date().getFullYear() - +age);


//TASK 14
document.write("<br><br></br><h1>K-Electric Bill</h1>");
document.write("<br><br></br>Customer Name : <strong>ABC Customer</strong>");
document.write("<br><br></br>Month :  <strong>", months[new Date().getMonth()], "</strong>");
document.write("<br><br></br>Number of units :  <strong>410</strong>");
document.write("<br><br></br>Charges per unit :  <strong>16</strong>");

document.write("<br><br></br>Net Amount Payable (within Due Date) :  <strong>6560</strong>");
document.write("<br><br></br>Late payment surcharge :  <strong>350</strong>");
document.write("<br><br></br>Gross Amount Payable (after Due Date) :  <strong>6910</strong>")


//-----------CHAPTER 35-38--------------
//TASK 1

function current_date() {
  document.write(new Date());
}

//TASK 2
function fullName(input1, input2) {
  var fullName1 = input1 + input2;
  alert(`Welcome ${fullName1}`);
}

//TASK 3
function add(num1, num2) {
  document.write("Sum is ", num2 + num2);
}

//TASK 4
function calculator(num1, num2, op) {
  if (op === '+') { document.write("<br>", num1, " ", op, " ", num2, " = ", num + num2) }
  if (op === '-') { document.write("<br>", num1, " ", op, " ", num2, " = ", num - num2) }
  if (op === '*') { document.write("<br>", num1, " ", op, " ", num2, " = ", num * num2) }
  if (op === '/') { document.write("<br>", num1, " ", op, " ", num2, " = ", num / num2) }
  if (op === '%') { document.write("<br>", num1, " ", op, " ", num2, " = ", num % num2) }
}

//TASK 5
function square(n) {
  return n * n;
}

//TASK 6
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    for (var i = 1; i < n; i++) {
      n = n * i;
    }
  }
  return n;
}


//TASK 7
function display(start, end) {
  for (var i = start; i < end + 1; i++) {
    document.write(" i :", i);
  }
}


//TASK 8
function calculateHypotenuse(base, perpendicular) {
  let hyp = base * base + perpendicular * perpendicular;
  document.write(Math.sqrt(hyp));

  function calculateSquare(hyp) {
    return hyp;
  }
}



//TASK 9
function area(width = 56, height = 45) {
  return width * height;
}



//TASK 10
function palindrome(string) {
  let rev = "";
  for (var i = string.length; i >= 0; i--) {
    rev += string[i];
  }

  if (string === rev) {
    document.write("String is palindrome");
  }
}



//TASK 11
function uppercase(string) {
  let splitted_string = string.split(" ");
  for (var i = 0; i < splitted_string.length; i++) {
    console.log(splitted_string[i][0].toUpperCase() + splitted_string[i].substr(1, splitted_string[i].length))
  }
}



//TASK 12
function longest_string(string) {
  let splitted_string = string.split(" ");
  let max = 0;
  let longest = "";
  for (var i = 0; i < splitted_string.length; i++) {
    if (splitted_string[i].length > max) {
      max = splitted_string[i].length;
      longest = splitted_string[i]

    }
  }
  console.log("Longest string : ", max, longest)
}


//TASK 13
function count_letter(string, letter) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (letter == string[i]) {
      count = count + 1;
    }
  }
  console.log(count);
}


//TASK 14
function calcCircumference(radius) {
  document.write("The circumference is : ", radius * 3.142, 2);
}

function calcArea() {
  document.write("The area is ", radius * radius * 3.142);
}*/
