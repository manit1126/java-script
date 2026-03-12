// string / method /properties

// length => number of characters

let randomstring = "we are doing string"

// console.log(randomstring.length);

// chartAt (index)

console.log(randomstring.charAt(7));

// concat

let firstName = "manit"
let lastName = "gourav"

// console.log(firstName+lastName);
console.log(`${firstName} ${lastName}`);

console.log(firstName.at(3));

 // slice,subString,subStr
 console.log(firstName.slice(0,4));
 console.log(randomstring.substring(0,6).toLocaleUpperCase(0));
 console.log(lastName.substr(0.4));
 
 
 let username = "       manit"
 console.log(username.trim());
 
 let email = "manitgourav1234@.com"
 console.log(email.repeat(5)+"         ");

 let paragraph = " java is very comfartable to use browser java"
  console.log(paragraph.replace("java","paythan"));

console.log(paragraph.replaceAll("java","paythan"));

  let names = "manit,sahil,rahul,baba"
  console.log(names.split(","));
  

  // includes, starswith, endswith 

  let emails = "manit12122.gmail"
  console.log(emails.includes("@"));
  console.log(emails.startsWith("manit"));
  console.log(emails.endsWith(".com"));
  