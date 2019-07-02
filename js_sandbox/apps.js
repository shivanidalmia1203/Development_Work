// BASIC JAVASCRIPT SYNTAX
 
//   alert('Hello World'); // displays an alert message
// // // // // // // // // // // // // // // //  // Log to console
// // // // // // // // // // // // // // // // console.log('Hello World');
// // // // // // // // // // // // // // // // console.log(123);
 // var greeting = 'Good Morning';
 // console.log(greeting);
// // // // // // // // // // // // // // // // console.log([1,2,3,4,5,6,7,8,9]);
// // // // // // // // // // // // // // // // console.log({a:1, b:2}); // a and b are objects
// // // // // // // // // // // // // // // // console.table({a:1, b:2}); // display contents in a table with index and value
// // // // // // // // // // // // // // // // console.error('This is  an error'); 
// // // // // // // // // // // // // // // // console.clear();
// // // // // // // // // // // // // // // // console.warn('This is a warning');
// // // // // // // // // // // // // // // // console.time('Hello'); 
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.log(greeting);
// // // // // // // // // // // // // // // // console.timeEnd('Hello'); //displays the time it took to perform the operation
// // // // // // // // // // // // // // // // /*
// // // // // // // // // // // // // // // //  multi line comment
// // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // var,(let,const) they have block level scope
// // // // // // // // // // // // // // // // // var name = 'Shivani Dalmia';
// // // // // // // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // // // // // // console.clear();
// // // // // // // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // // // // // // name = "Shivi";
// // // // // // // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // // // // // // var test; //initialize variable
// // // // // // // // // // // // // // // // // console.log(test);
// // // // // // // // // // // // // // // // // test = "Strings";
// // // // // // // // // // // // // // // // // console.log(test);
// // // // // // // // // // // // // // // // // test = 5;
// // // // // // // // // // // // // // // // // console.log(test);
// // // // // // // // // // // // // // // // // // variables cant start with a number
// // // // // // // // // // // // // // // // // // variables can include letters numbers _ $
// // // // // // // // // // // // // // // // // // Multi word variable
// // // // // // // // // // // // // // // // // var firstName = 'Shivani'; // Camel Case
// // // // // // // // // // // // // // // // // var first_name = 'Shivani'; // underscore
// // // // // // // // // // // // // // // // // var FirstName = 'Shivani'; // Pascal Case
// // // // // // // // // // // // // // // // //  LET
// // // // // // // // // // // // // // // // //  let name;
// // // // // // // // // // // // // // // // //  name = 'Shivani';
// // // // // // // // // // // // // // // // //  console.log(name);
// // // // // // // // // // // // // // // // //  // let works in the same way as var works the only difference is in block scope
// // // // // // // // // // // // // // // // const name = 'Shivani';
// // // // // // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // // // // // // cannot reassign
// // // // // // // // // // // // // // // // //name = 'Sarah';
// // // // // // // // // // // // // // // //  // Have to initialize at the starting 
// // // // // // // // // // // // // // // // // const greetings; // This will give error
// // // // // // // // // // // // // // // //  const person = {    // object
// // // // // // // // // // // // // // // //   name: 'Shivani',
// // // // // // // // // // // // // // // //   age: 19
// // // // // // // // // // // // // // // //  } 
// // // // // // // // // // // // // // // //  console.log(person);
// // // // // // // // // // // // // // // //   // we can change the name and age outside the person object
// // // // // // // // // // // // // // // //    person.name = 'Dalmia';
// // // // // // // // // // // // // // // //    person.age = 19.1;

// // // // // // // // // // // // // // // //   console.log(person);
// // // // // // // // // // // // // // // //   const numbers = [1,2,3,4,5,6];
// // // // // // // // // // // // // // // //   console.log(numbers);
// // // // // // // // // // // // // // // //   numbers.push(7);
// // // // // // // // // // // // // // // //   console.log(numbers);
// // // // // // // // // // // // // // // //    // Data types

// // // // // // // // // // // // // // // //     // PRIMITIVE
// // // // // // // // // // // // // // // //   const name1 = "Shivani";
// // // // // // // // // // // // // // // //   console.log(typeof name); //String
// // // // // // // // // // // // // // // //   const age = 19;
// // // // // // // // // // // // // // // //   console.log(typeof age); //number
// // // // // // // // // // // // // // // //   const hasKids = false;
// // // // // // // // // // // // // // // //   console.log(typeof hasKids); //boolean
// // // // // // // // // // // // // // // //   const car = null;
// // // // // // // // // // // // // // // //   console.log(typeof car); //object actually an error bcz its not actually an object but javascript considers it as  an object
// // // // // // // // // // // // // // // //   let test;
// // // // // // // // // // // // // // // //   console.log(typeof test); //undefined
// // // // // // // // // // // // // // // //   const sym = Symbol();
// // // // // // // // // // // // // // // //   console.log(typeof sym); // symbol
  
// // // // // // // // // // // // // // // //   //REFERENCE TYPES  -  objects
// // // // // // // // // // // // // // // //   const hobbies = ['movies','painting'];
// // // // // // // // // // // // // // // //   console.log(typeof hobbies); // object 
// // // // // // // // // // // // // // // //   const address = {
// // // // // // // // // // // // // // // //     city: 'Delhi',
// // // // // // // // // // // // // // // //     state: 'India'
// // // // // // // // // // // // // // // //   } 
// // // // // // // // // // // // // // // //   console.log(typeof address);  // object
// // // // // // // // // // // // // // // //   const today = new Date();
// // // // // // // // // // // // // // // //   console.log(today);
// // // // // // // // // // // // // // // //   console.log(typeof today);  // object

// // // // // // // // // // // // // // // // Type Conversion

// // // // // // // // // // // // // // // // Converting to string
// // // // // // // // // // // // // // //  let val;
// // // // // // // // // // // // // // // val = 5;
// // // // // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // // // console.log(typeof val);
// // // // // // // // // // // // // // // console.log(val.length); //to find length of a  string 
// // // // // // // // // // // // // // //  // Number to string
// // // // // // // // // // // // // // // val = String(5);
// // // // // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // // // console.log(typeof val);
// // // // // // // // // // // // // // // console.log(val.length);
// // // // // // // // // // // // // // //  // Bool to string
// // // // // // // // // // // // // // //  val = String(true);
// // // // // // // // // // // // // // //  console.log(val);
// // // // // // // // // // // // // // //  console.log(typeof val);
// // // // // // // // // // // // // // //  console.log(val.length);
// // // // // // // // // // // // // // //  // Date to string
// // // // // // // // // // // // // // //  val = String(new Date());
// // // // // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // // // console.log(typeof val);
// // // // // // // // // // // // // // // console.log(val.length);
// // // // // // // // // // // // // // // // Array to string
// // // // // // // // // // // // // // // val = String([1,2,3,4,5,6,7,8]);
// // // // // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // // // console.log(typeof val);
// // // // // // // // // // // // // // // console.log(val.length);
// // // // // // // // // // // // // // // // toString() method
// // // // // // // // // // // // // // // val = (5).toString();val = String(5);
// // // // // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // // // console.log(typeof val);
// // // // // // // // // // // // // // // console.log(val.length);

// // // // // // // // // // // // // // // // We can use  either of the above two methods for type conversion

// // // // // // // // // // // // // // // //Converting to number
// // // // // // // // // // // // // // // let val1;
// // // // // // // // // // // // // // // val1 = '5';
// // // // // // // // // // // // // // // // string to number
// // // // // // // // // // // // // // //  val1 = Number('5');
// // // // // // // // // // // // // // // console.log(val1);
// // // // // // // // // // // // // // // console.log(typeof val1);
// // // // // // // // // // // // // // // console.log(val1.toFixed(2)); // fix upto two decimal places
// // // // // // // // // // // // // // // // bool to number
// // // // // // // // // // // // // // // val1 = Number(true); // gives the value 1
// // // // // // // // // // // // // // // val1 = Number(null); // gives the value 0
// // // // // // // // // // // // // // // console.log(val1);
// // // // // // // // // // // // // // // console.log(typeof val1);
// // // // // // // // // // // // // // // console.log(val1.toFixed(2));
// // // // // // // // // // // // // // // val1 = Number('hello');
// // // // // // // // // // // // // // // console.log(val1); //NAN not  a number
// // // // // // // // // // // // // // // console.log(typeof val1);
// // // // // // // // // // // // // // // val1 = Number([1,2,3,4,5]);
// // // // // // // // // // // // // // // console.log(val1); // NAN
// // // // // // // // // // // // // // // console.log(typeof val1);
// // // // // // // // // // // // // // // console.log(val1.toFixed(2));
// // // // // // // // // // // // // // // val1 = parseInt('100.30');
// // // // // // // // // // // // // // // console.log(val1);
// // // // // // // // // // // // // // // val1 = parseFloat('100.30');
// // // // // // // // // // // // // // // console.log(val1);

// // // // // // // // // // // // // // const val2 = String(5);
// // // // // // // // // // // // // // const val3 = 6;
// // // // // // // // // // // // // // const sum = val2 + val3;
// // // // // // // // // // // // // // console.log(sum);
// // // // // // // // // // // // // // console.log(typeof sum); //56 bcz it concatenated the two values

// // // // // // // // // // // // // const num1 = 100;
// // // // // // // // // // // // // const num2 = 50;
// // // // // // // // // // // // // let val;
// // // // // // // // // // // // // //Simple math with numbers
// // // // // // // // // // // // // val = num1 + num2;
// // // // // // // // // // // // // val = num1 - num2;
// // // // // // // // // // // // // val = num1 * num2;
// // // // // // // // // // // // // val = num1 / num2;
// // // // // // // // // // // // // val = num1 % num2;
// // // // // // // // // // // // //  // Math object
// // // // // // // // // // // // //  val =  Math.PI;
// // // // // // // // // // // // //  console.log(val);
// // // // // // // // // // // // //  val = Math.E;
// // // // // // // // // // // // //  console.log(val);
// // // // // // // // // // // // //  val = Math.round(2.4);
// // // // // // // // // // // // //  val = Math.ceil(2.4);
// // // // // // // // // // // // //  val = Math.floor(2.4);
// // // // // // // // // // // // //  val = Math.sqrt(9);
// // // // // // // // // // // // //  val = Math.abs(-56);
// // // // // // // // // // // // //  val = Math.pow(8,2);
// // // // // // // // // // // // //  val = Math.min(2,3,4,5,0,1,-1);
// // // // // // // // // // // // //  val = Math.max(1,23,34,56,67);
// // // // // // // // // // // // //  val = Math.random();
// // // // // // // // // // // // //  val = Math.floor(Math.random() * 20 + 1); // any random number between 1 to 20
// // // // // // // // // // // // //  console.log(val);

// // // // // // // // // // // // const firstName = 'Shivani';
// // // // // // // // // // // // const lastName = 'Dalmia';
// // // // // // // // // // // // const age = 19;
// // // // // // // // // // // // let val;
// // // // // // // // // // // // const str = 'hello my name is shivani';
// // // // // // // // // // // // val = firstName + lastName; //without space
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // // Concatenate
// // // // // // // // // // // // val = firstName + ' ' + lastName;
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // //  // Append without space
// // // // // // // // // // // //  val = 'Shivani';
// // // // // // // // // // // //  val += 'Dalmia';
// // // // // // // // // // // //  console.log(val);
// // // // // // // // // // // // val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// // // // // // // // // // // // console.log(val);

// // // // // // // // // // // // // Escapinng
// // // // // // // // // // // // val = "That's awesome, I can't wait";
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // val = 'That\'s awesome, I can\'t wait';
// // // // // // // // // // // // console.log(val);

// // // // // // // // // // // // // length
// // // // // // // // // // // // val = firstName.length;
// // // // // // // // // // // // // concat()
// // // // // // // // // // // // val = firstName.concat(' ',lastName);
// // // // // // // // // // // // //change case
// // // // // // // // // // // // val = firstName.toUpperCase();
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // val = firstName.toLowerCase();
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // val = firstName[0];
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // //index
// // // // // // // // // // // // val = firstName.indexOf('S');
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // val = firstName.lastIndexOf('v');
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // //charAt()
// // // // // // // // // // // // val = firstName.charAt('0');
// // // // // // // // // // // // console.log(val);
// // // // // // // // // // // // //get last char
// // // // // // // // // // // // val = firstName.charAt(firstName.length - 1);
// // // // // // // // // // // // console.log(val);

// // // // // // // // // // // // // Sub Strings
// // // // // // // // // // // //  val = firstName.substring(0,4);
// // // // // // // // // // // //   // slice
// // // // // // // // // // // //   val = firstName.slice(-3);  // take last 3

// // // // // // // // // // // //   // split
// // // // // // // // // // // //    val = str.split(' ');
// // // // // // // // // // // //    console.log(val);


// // // // // // // // // // // // // replace
// // // // // // // // // // // // val= str.replace('hello', 'hi');
// // // // // // // // // // // // console.log(val);

// // // // // // // // // // // // //includes /true or false value if a word is in the strig or not
// // // // // // // // // // // // val =  str.includes('hi');
// // // // // // // // // // // // console.log(val); 

// // // // // // // // // // // // template
// // // // // // // // // // // const name = 'Shivani';
// // // // // // // // // // // const age = 19;
// // // // // // // // // // // const job = 'Web Developer';
// // // // // // // // // // // const city = 'Delhi';
// // // // // // // // // // // let html;
// // // // // // // // // // //  // without template strings (es5)
// // // // // // // // // // //  html = '<u1><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></u1>';

// // // // // // // // // // //  html = '<ul>' +
// // // // // // // // // // //         '<li>Name: ' + name + '</li>' +
// // // // // // // // // // //         '<li>Age: ' + age + '</li>' +
// // // // // // // // // // //         '<li>Job: ' + job + '</li>' +
// // // // // // // // // // //         '<li>City: ' + city + '</li>' +
// // // // // // // // // // //         '</ul>';

// // // // // // // // // // // document.body.innerHTML = html;

// // // // // // // // // // // function hello(){
// // // // // // // // // // //   return "Hello";
// // // // // // // // // // // }
// // // // // // // // // // //  // with template strings / literals (es6)

// // // // // // // // // // //  html = `
// // // // // // // // // // //    <ul>
// // // // // // // // // // //      <li>Name : ${name}</li>
// // // // // // // // // // //      <li>Age: ${age}</li>
// // // // // // // // // // //      <li>Job : ${job}</li>
// // // // // // // // // // //      <li>City : ${city}</li>
// // // // // // // // // // //      <li>${2+2}</li>
// // // // // // // // // // //      <li>${hello()}</li>
// // // // // // // // // // //      <li>${age > 18 ? 'Adult' : 'Under 18'}</li>
// // // // // // // // // // //      </ul>
// // // // // // // // // // //  `;
// // // // // // // // // // //  document.body.innerHTML = html;


// // // // // // // // // // // Arrays 

// // // // // // // // // // // create some arrays
// // // // // // // // // // const numbers = [23,34,5,677,2,4, , , ,];
// // // // // // // // // // const numbers2 =  new Array(22,34,56,78);
// // // // // // // // // // const fruit = ['Apple','banana','Grapes','pear']
// // // // // // // // // // const mixed = [22,'hello',true,undefined,null,{a:1 , b:1}, new Date()];
// // // // // // // // // // let val;
// // // // // // // // // //  console.log(numbers);
// // // // // // // // // //  console.log(numbers2);
// // // // // // // // // //  console.log(fruit);
// // // // // // // // // //  console.log(mixed);
// // // // // // // // // //   val = numbers.length;
// // // // // // // // // //   console.log(val);
// // // // // // // // // //   // check if its an array
// // // // // // // // // //    val =  Array.isArray(numbers);
// // // // // // // // // //    console.log(val);
// // // // // // // // // //     // get single value
// // // // // // // // // //     val = numbers[3];
// // // // // // // // // //     console.log(val);
// // // // // // // // // //     val = numbers[0];
// // // // // // // // // //     console.log(val);
// // // // // // // // // //     // Insert into array
// // // // // // // // // //     numbers[3]= 12;
// // // // // // // // // //     //find index of value
// // // // // // // // // //     val = numbers.indexOf(12);
// // // // // // // // // //     console.log(val);
// // // // // // // // // //     // MUTATING ARRAYS
// // // // // // // // // //     // Add to end
// // // // // // // // // //     numbers.push(250);
// // // // // // // // // //     // Add to the front
// // // // // // // // // //     numbers.unshift(20);
// // // // // // // // // //     console.log(numbers); 
// // // // // // // // // //     // Take off from end
// // // // // // // // // //     numbers.pop();
// // // // // // // // // //     console.log(numbers);
// // // // // // // // // //     // Take off from front
// // // // // // // // // //      numbers.shift();
// // // // // // // // // //      // splice values
// // // // // // // // // //       numbers.splice(1,3); // (start,end) to delete
// // // // // // // // // //       console.log(numbers);
// // // // // // // // // //       // reverse
// // // // // // // // // //       numbers.reverse();
// // // // // // // // // //       //concatenate arrays
// // // // // // // // // //       val = numbers.concat(numbers2);
// // // // // // // // // //       console.log(val);
// // // // // // // // // //       // sort arrays
// // // // // // // // // //       val = fruit.sort();  // alphabetical sort
// // // // // // // // // //       console.log(fruit);
// // // // // // // // // //       val = numbers.sort();
// // // // // // // // // //       console.log(numbers);
// // // // // // // // // //       // Use the compare function
// // // // // // // // // //       val = numbers.sort(function(x,y){ return x-y;}); // sort in ascending order
// // // // // // // // // //       console.log(val);
// // // // // // // // // //       val = numbers.sort(function(x,y){return y-x;}); // sort in descending order
// // // // // // // // // //       console.log(val);
// // // // // // // // // //       // find
// // // // // // // // // //       function under40(num)
// // // // // // // // // //       {
// // // // // // // // // //         return num < 40;
// // // // // // // // // //       }
// // // // // // // // // //       val = numbers.find(under40);
// // // // // // // // // //       console.log(val);

// // // // // // // // // //       // object literals
// // // // // // // // //  const person = {
// // // // // // // // //    firstName : 'Shivani',
// // // // // // // // //    lastName : 'Dalmia',
// // // // // // // // //    age : 19 ,
// // // // // // // // //    email : 'dalmiashivani1203@gmail.com',
// // // // // // // // //    hobbies : ['painting','dance'],
// // // // // // // // //  getBirthYear: function(){
// // // // // // // // //   return 2000;  // 2019 - this.age
// // // // // // // // //  }
// // // // // // // // // }
// // // // // // // // //   let val;
// // // // // // // // //   val = person;
// // // // // // // // //  // get specified value
// // // // // // // // //  val = person.firstName;
// // // // // // // // //  console.log(val);
// // // // // // // // //  val =  person['lastName'];
// // // // // // // // //  console.log(val);
// // // // // // // // //  val = person.getBirthYear();
// // // // // // // // // console.log(val);
 
// // // // // // // // // date time
// // // // // // // //  let val;
// // // // // // // //  const today = new Date();
// // // // // // // //  const birthday = new Date('03-12-2000');
// // // // // // // //  console.log(today);
// // // // // // // //  val = birthday;
// // // // // // // //  console.log(val);
// // // // // // // //  val = today.getMonth();
// // // // // // // //  console.log(val);
// // // // // // // //  val = today.getDay();
// // // // // // // //  console.log(val);
// // // // // // // //  val = today.getDate();
// // // // // // // //  console.log(val);
// // // // // // // //  val = today.getTime();
// // // // // // // //  console.log(val);
// // // // // // // //  val = today.getFullYear();
// // // // // // // //  console.log(val);
      

// // // // // // // // Control Statements

// // // // // // // const id = '200';
// // // // // // // if (id == 200){ // comparison
// // // // // // //  console.log("CORRECT");
// // // // // // // }
// // // // // // // else{
// // // // // // //   console.log("INCORRECT");
// // // // // // // }
// // // // // // // // NOT EQUAL TO
// // // // // // // if (id != 200){ // comparison
// // // // // // //   console.log("INCORRECT");
// // // // // // //  }
// // // // // // //  else{
// // // // // // //    console.log("CORRECT");
// // // // // // //  }
// // // // // // //  // EQUAL TO VALUE AND TYPE
// // // // // // //  if (id === 200){ // comparison
// // // // // // //   console.log("CORRECT");
// // // // // // //  }
// // // // // // //  else{
// // // // // // //    console.log("INCORRECT");
// // // // // // //  }
// // // // // // //  if (id)
// // // // // // //  {
// // // // // // //    console.log(`The ID is: ${id}`);
// // // // // // //  }
// // // // // // //  else{
// // // // // // //    console.log("No ID");
// // // // // // //  }
  
// // // // // // // functions

// // // // // //  function greet(){
// // // // // //    return "Hello";
// // // // // //  }
// // // // // //  console.log(greet());

// // // // // // loops

// // // // // // for loop
// // // // //  for (let i=0;i<10;i++){
// // // // //   console.log('Number '+ i);
// // // // //   if (i ===2)
// // // // //     console.log(`2 is my fav no`);
// // // // //   if (i === 6)
// // // // //   break;
// // // // //  }


// // // // // While loop

// // // // // let i=0;
// // // // // while(i < 10){
// // // // //   console.log(`Number ` + i);
// // // // //   i++;
// // // // //}
// // // // // loop through array
// // // // const cars = ['Ford','Chevy','Honda','Toyota','Volkswagon'];
// // // // for (let i=0;i<cars.length;i++)  // method 1
// // // // {
// // // //   console.log(cars[i]);
// // // // }
// // // // cars.forEach(function(car){  // callback function // method 2
// // // //  console.log(car);
// // // // });
// // // // // Map
// // // // // we create an array of abjects
// // // // const users = [
// // // //   {id: 1,name:"Shivani"},
// // // //   {id: 2,name:"Shubham"},
// // // //   {id: 3,name:"Sri"}
// // // // ];
// // // // const ids = users.map(function(user){
// // // //   return user.id;
// // // // });
// // // // console.log(ids);
// // // //  const user = {
// // // //    firstName: "Shivani",
// // // //    lastName: "Dalmia",
// // // //    age: 19
// // // //  }
// // // //  // for in loop
// // // // for (let x in user)
// // // // {
// // // //   console.log(`${x} : ${user[x]}`); //(x) keys
// // // // }

// // // //alert('Hello user');
// // // // const input = prompt();
// // // // alert(input);

// // // if(confirm('Are you sure?..')){
// // //   console.log('Yes');
// // // }
// // // else{
// // //   console.log('No');
// // // }
// // // let val;
// // // val = window.outerHeight;
// // // console.log(val);
// //  val = window.location.hostname
// // // val = window.location.search;
// //  val = window.location.href;
// //  console.log(val);
// //  // Redirect
// //  window.location.href = 'http://facebook.com':
// // console.log(val);
// // window.history.go(-3);
// //console.log(val);
// let val;
// val = window.history.length;
// console.log(val);
// val = window.navigator;
// console.log(val);

// Scopes
 






















