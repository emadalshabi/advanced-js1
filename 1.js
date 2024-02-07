let user = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = user;
  
  console.log(name);  
  console.log(age);    
  console.log(isAdmin);


  //   
let planet = "Earth";
let current_visitor = "";
// 
 let phrase = "Hello"

  if (true) {
   let user = "John";
   function sayHi() {
     alert(`${phrase}, ${user}`)
   }
  }

 sayHi()
 
//  
 const userr = {
     name: "John"
   }
  
   userr.name = "Pete"

   console.log(userr)

   // 

   let salaries = {
     Fred: 100,
     Ted: 160,
     Ghaith: 130
   }

  // 

//    if (a + b < 4) {
//      result = 'Below';
//    } else {
//      result = 'Over';
//    }
  let a = 1
  let b = 2 

 let result = a + b < 4 ? "Below" : "over";
 console.log(result);

// 


//  let message;

//  if (login == 'Employee') {
//    message = 'Hello';
//  } else if (login == 'Director') {
//    message = 'Greetings';
//  } else if (login == '') {
//    message = 'No login';
//  } else {
//    message = '';
//  }

 let login = 'Director'
 let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '' ) ? 'No login' :'';

 console.log(message);


// 
 