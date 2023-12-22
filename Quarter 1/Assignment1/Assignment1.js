var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Adding two lines of space
console.log("\n\n");
console.log("_________________Name : Abdul Nasir___________________________");
console.log("_________________Batch NO 51__________________________________");
console.log("_________________Roll No : PIAIC211557________________________");
console.log("_________________Assignment No 1 : Solution___________________");
console.log("_________________City : Karachi_______________________________");
// Adding Four lines of space
console.log("\n\n\n\n");
//******************************************Assignment No 1 Solution******************************************************* */
console.log("__________________Assignment No 1 Solution___________________________");
console.log("\n");
//*********************************************************************************************************** */
console.log("_________________Question No 2 Solution Output___________________________");
console.log("\n");
/*
 2. Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric,
would you like to learn some Python today?”
*/
var A = "Hello Eric,would you like to learn some Python today?";
// Print a message
console.log(A);
// Adding two lines of space
console.log("\n\n");
//*********************************************************************************************************** */
console.log("__________________Question No 3 Solution Output___________________________");
console.log("\n");
/*
 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
 and titlecase.
*/
var B = "Abdul Nasir";
// Print the name in lowercase
console.log("Lowercase: " + B.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + B.toUpperCase());
// Print the name in titlecase
console.log("Titlecase: " + toTitleCase(B));
// Function to convert a string to title case
function toTitleCase(input) {
    return input.replace(/\w\S*/g, function (text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}
// Adding two lines of space
console.log("\n\n");
//*************************************************************************************************************** */
console.log("__________________Question No 4 Solution Output___________________________");
console.log("\n");
/*
4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/
// Store the quote and its author in variables
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
// Print the quote and its author
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// Adding two lines of space
console.log("\n\n");
//*************************************************************************************************************** */
console.log("__________________Question No 5 Solution Output___________________________");
console.log("\n");
/*
5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.
*/
// Store the message and its famous's person in variables
var message = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
// Print the message and famous peron's name
console.log("".concat(famous_person, " once said, \"").concat(message, "\""));
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 6 Solution Output___________________________");
console.log("\n");
/*
6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
 and end of the name. Make sure you use each  character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed.
 Then print the name after striping the white spaces.
*/
// Store a person's name with leading and trailing whitespace
var personNameWithWhitespace = "\t\n   John Doe   \t\n";
// Print the name with whitespace
console.log("Name with Whitespace: '" + personNameWithWhitespace + "'");
// Strip whitespace and print the name
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name: '" + strippedName + "'");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 7 Solution Output___________________________");
console.log("\n");
/*
7. Number Eight: Write addition, subtraction, multiplication,
and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results.
*/
// Addition
var addition = 5 + 3;
console.log("Addition Result: " + addition);
// Subtraction
var subtraction = 10 - 2;
console.log("Subtraction Result: " + subtraction);
// Multiplication
var multiplication = 4 * 2;
console.log("Multiplication Result: " + multiplication);
// Division
var division = 16 / 2;
console.log("Division Result: " + division);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 8 Solution Output___________________________");
console.log("\n");
/*
8. You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

Your output should simply be four lines with the number 8 appearing once on each line.
*/
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 9 Solution Output___________________________");
console.log("\n");
/*
9. Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your favorite number. Print that message.

*/
// Store your favorite number in a variable
var favNumber = 5;
// Create a message revealing your favorite number
var message1 = "My favorite number is ".concat(favNumber, ".");
// Print the message
console.log(message1);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 10 Solution Output___________________________");
console.log("\n");
/*
10. Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If you don’t have anything specific to write
*/
console.log('For single line comments // is using and for multi line comments /* */ are using, For example see code below');
// Store your favorite number in a variable
var favtNumber = 5; // Coments  added here.......
// Create a message revealing your favorite number
var mesage = "My favorite number is ".concat(favtNumber, "."); // Coments ......
// Print the message
console.log(mesage); // Display the message
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 11 Solution Output___________________________");
console.log("\n");
/*
11. Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// Store names in an array
var nam = ["Najam", "Khalid", "Ahtasham", "Noman", "Ali"];
// Print each person's name one at a time
console.log("Friend 1: " + nam[0]);
console.log("Friend 2: " + nam[1]);
console.log("Friend 3: " + nam[2]);
console.log("Friend 4: " + nam[3]);
console.log("Friend 5: " + nam[4]);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 12 Solution Output___________________________");
console.log("\n");
/*
12. Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/
// Store names in an array
var nam1 = ["Najam", "Khalid", "Ahtasham", "Noman", "Ali"];
// Print personalized messages
nam1.forEach(function (nam1, index) {
    console.log("Salam arz, ".concat(nam1, "! You're an awesome friend!"));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 13 Solution Output___________________________");
console.log("\n");
/*
13. Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
// Store examples of favorite modes of transportation in an array
var favtTran = ["HondaCd70", "Honda Prider ", "Honda125", "Honda150", "Suzuki"];
// Print statements about each item in the list
favtTran.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle, "."));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 14 Solution Output___________________________");
console.log("\n");
/*
14. Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// Store a list of people to invite to dinner
var guestList = ["Najam", "Ahtasham", "Noman"];
// Print messages inviting each person to dinner
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 15 Solution Output___________________________");
console.log("\n");
/*
15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
// Store a list of people to invite to dinner
var guestList1 = ["Najam", "Ahtasham", "Noman"];
// Print messages inviting each person to dinner
guestList1.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Print the guest who can't make it
var guestWhoCantMakeIt1 = guestList1[1];
console.log("Unfortunately, ".concat(guestWhoCantMakeIt1, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestList1[1] = "Khan";
// Print second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList1.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 16 Solution Output___________________________");
console.log("\n");
/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
// Store a list of people to invite to dinner
var guestList2 = ["Najam", "Ahtasham", "Noman"];
// Print messages inviting each person to dinner
guestList2.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Print the guest who can't make it
var guestWhoCantMakeIt = guestList2[1];
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestList2[1] = "Khan";
// Print second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList2.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Inform that a bigger dinner table is found
console.log("\nGood news! We found a bigger dinner table.");
// Add new guests
guestList.unshift("Nasir"); // Add to the beginning
guestList.splice(2, 0, "Mustafa Hamdan"); // Add to the middle
guestList.push("Alishba Hoor"); // Add to the end
// Print a new set of invitation messages
console.log("\nFinal set of invitation messages:");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 17 Solution Output___________________________");
console.log("\n");
/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.

*/
// Store a list of people to invite to dinner
var guestList3 = ["Najam", "Ahtasham", "Hamdan", "Ali", "Fahad", "M Khan"];
// Print messages inviting each person to dinner
guestList3.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Print the guest who can't make it
var guestWhoCantMakeIt3 = guestList3[4];
console.log("Unfortunately, ".concat(guestWhoCantMakeIt3, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestList3[4] = "Noman";
// Print second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList3.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Inform that a bigger dinner table is found
console.log("\nGood news! We found a bigger dinner table.");
// Add new guests
guestList3.unshift("Naveed"); // Add to the beginning
guestList3.splice(2, 0, "Zaib"); // Add to the middle
guestList3.push("Zaid"); // Add to the end
// Print a new set of invitation messages
console.log("\nFinal set of invitation messages:");
guestList3.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Inform that only two people can be invited
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (guestList3.length > 2) {
    var removedPerson = guestList3.pop();
    console.log("Sorry, ".concat(removedPerson, ", we can't invite you to dinner."));
}
// Print messages to the two people still on the list
console.log("\n".concat(guestList3[0], ", you're still invited!"));
console.log("".concat(guestList3[1], ", you're still invited!"));
// Remove the last two names from the list
guestList3.pop();
guestList3.pop();
// Print the empty list
console.log("\nEmpty guest list:", guestList3);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 18 Solution Output___________________________");
console.log("\n");
/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed.
*/
// Store places to visit in an array (not in alphabetical order)
var placeVisited = ["Islamabad", "Lahore", "Peshawar", "Karachi", "Swabi"];
// Print the array in its original order
console.log("Original Order:", placeVisited);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placeVisited, true).sort());
// Show that the array is still in its original order
console.log("Original Order (unchanged):", placeVisited);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placeVisited, true).sort().reverse());
// Show that the array is still in its original order
console.log("Original Order (unchanged):", placeVisited);
// Reverse the order of the list
placeVisited.reverse();
// Print the array to show that its order has changed
console.log("Reversed Order:", placeVisited);
// Reverse the order of the list again
placeVisited.reverse();
// Print the list to show it’s back to its original order
console.log("Original Order (restored):", placeVisited);
// Sort the array so it’s stored in alphabetical order
placeVisited.sort();
// Print the array to show that its order has been changed
console.log("Sorted in Alphabetical Order:", placeVisited);
// Sort to change the array so it’s stored in reverse alphabetical order
placeVisited.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("Sorted in Reverse Alphabetical Order:", placeVisited);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 19 Solution Output___________________________");
console.log("\n");
/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/
// Store a list of people to invite to dinner
var guestList4 = ["Najam", "Ahtasham", "Hamdan", "Ali", "Fahad", "M Khan"];
// Print messages inviting each person to dinner
guestList4.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Inform that a bigger dinner table is found
console.log("\nGood news! We found a bigger dinner table.");
// Add new guests
guestList4.unshift("Noman"); // Add to the beginning
guestList4.splice(2, 0, "Zaid"); // Add to the middle
guestList4.push("Zaib"); // Add to the end
// Print a new set of invitation messages
console.log("\nFinal set of invitation messages:");
guestList4.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. I would be honored to have your company."));
});
// Inform about the number of people invited to dinner
console.log("\nTotal number of people invited to dinner: ".concat(guestList4.length));
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 20 Solution Output___________________________");
console.log("\n");
/*
20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/
// Store a list of programming languages in an array
var progLanguages = ["JavaScript", "Python", "Java", "TypeScript", "C#", "Swift", "Ruby"];
// Print the list of programming languages
console.log("List of Programming Languages:");
progLanguages.forEach(function (language, index) {
    console.log("".concat(index + 1, ". ").concat(language));
});
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 21 Solution Output___________________________");
console.log("\n");
/*
21. They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.
*/
// Create TypeScript objects representing books
var book1 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publicationYear: 1979,
};
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
};
var book3 = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
};
// Print information about each book
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 22 Solution Output___________________________");
console.log("\n");
/*
22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
*/
// Define an array
var colors = ["Red", "Green", "Blue"];
// Try to access an element at an invalid index
var invalidIndex = 5;
console.log(colors[invalidIndex]); // Intentional error
// Correct the error by checking the array length
if (invalidIndex >= 0 && invalidIndex < colors.length) {
    console.log("Corrected Result:", colors[invalidIndex]);
}
else {
    console.log("Error: Invalid index.");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 23 Solution Output___________________________");
console.log("\n");
/*
23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2
console.log("\nIs car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// Test 3
console.log("\nIs car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 4
console.log("\nIs car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// Test 5
console.log("\nIs car.length > 0? I predict True.");
console.log(car.length > 0); // True
// Test 6
console.log("\nIs car starts with 's'? I predict True.");
console.log(car[0] === 's'); // True
// Test 7
console.log("\nIs car includes 'u'? I predict True.");
console.log(car.indexOf('u') !== -1); // True
// Test 8
console.log("\nIs car ends with 'o'? I predict False.");
console.log(car[car.length - 1] === 'o'); // False
// Test 9
console.log("\nIs the third character of car 'b'? I predict True.");
console.log(car[2] === 'b'); // True
// Test 10
console.log("\nIs car.toLowerCase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru'); // True
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 24 Solution Output___________________________");
console.log("\n");
/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result
for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "hello";
console.log("Equality test with strings:", string1 === string2); // False
console.log("Inequality test with strings:", string1 !== string2); // True
// Tests using the lower case function
console.log("Lowercase test:", string1.toLowerCase() === string2); // True
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 5;
console.log("Equality test with numbers:", number1 === number2); // False
console.log("Inequality test with numbers:", number1 !== number2); // True
console.log("Greater than test:", number1 > number2); // True
console.log("Less than test:", number1 < number2); // False
console.log("Greater than or equal to test:", number1 >= number2); // True
console.log("Less than or equal to test:", number1 <= number2); // False
// Tests using "and" and "or" operators
var isTrue = true;
var isFalse = false;
console.log("And operator (true and true):", isTrue && isTrue); // True
console.log("And operator (true and false):", isTrue && isFalse); // False
console.log("Or operator (true or true):", isTrue || isTrue); // True
console.log("Or operator (true or false):", isTrue || isFalse); // True
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange", "grape"];
var isBananaPresent = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === "banana") {
        isBananaPresent = true;
        break;
    }
}
console.log("Array includes test:", isBananaPresent); // True
// Test whether an item is not in an array
var isKiwiPresent = false;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === "kiwi") {
        isKiwiPresent = true;
        break;
    }
}
console.log("Array does not include test:", !isKiwiPresent); // True
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 25 Solution Output___________________________");
console.log("\n");
/*
25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/
var alien_color = 'green';
// If the alien's color is green, print a message that the player earned 5 points
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 26 Solution Output___________________________");
console.log("\n");
/*
26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/
var alien_color1 = 'red';
// If the alien's color is green, print a statement that the player earned 5 points
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("You earned 10 points for shooting an alien of a different color.");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 27 Solution Output___________________________");
console.log("\n");
/*
27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/
// for green color
console.log("When alien color is green");
var alien_color2 = 'green';
// If the alien is green, print a message that the player earned 5 points
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// for yellow color
console.log("When alien color is yellow");
var alien_color3 = 'yeloow';
// If the alien is green, print a message that the player earned 5 points
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// for red color
console.log("When alien color is red");
var alien_color4 = 'red';
// If the alien is green, print a message that the player earned 5 points
if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color4 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 28 Solution Output___________________________");
console.log("\n");
/*
28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/
var age = 25; // You can change the value of age
// Determine the person's stage of life based on age
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 29 Solution Output___________________________");
console.log("\n");
/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/
// Make an array of your three favorite fruits and call it favorite_fruits
var favorite_fruits = ["banana", "apple", "strawberry"];
// Write five if statements using a for loop to check for certain fruits in the array
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "banana") {
        console.log("You really like bananas!");
    }
    if (favorite_fruits[i] === "apple") {
        console.log("You really like apples!");
    }
    if (favorite_fruits[i] === "strawberry") {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits[i] === "orange") {
        console.log("You really like oranges!");
    }
    else {
        console.log("Oranges are not in your list of favorite fruits.");
    }
    if (favorite_fruits[i] === "kiwi") {
        console.log("You really like kiwis!");
    }
    else {
        console.log("Kiwis are not in your list of favorite fruits.");
    }
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 30 Solution Output___________________________");
console.log("\n");
/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var usernames = ["admin", "Nasir", "Najam", "Ahtasham", "Noman"];
// Loop through the array and print greetings to each user
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 31 Solution Output___________________________");
console.log("\n");
/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var usernames1 = []; // Empty array
// Check if the list of users is not empty
if (usernames1.length > 0) {
    // Loop through the array and print greetings to each user
    for (var _a = 0, usernames1_1 = usernames1; _a < usernames1_1.length; _a++) {
        var username = usernames1_1[_a];
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 32 Solution Output___________________________");
console.log("\n");
/*
32. Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of
the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ["Abdul", "Nasir", "Najam", "Ahtasham", "Noman"];
var new_users = ["Mustafa", "Hamdan", "Alishba Hoor", "Khan", "Fahad"];
// Convert all usernames to lowercase for case-insensitive comparison
var lowercased_current_users = current_users.map(function (username) { return username.toLowerCase(); });
// Loop through the new_users list to check for uniqueness
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_username = new_users_1[_b];
    // Convert the new username to lowercase for case-insensitive comparison
    var lowercased_new_username = new_username.toLowerCase();
    // Check if the lowercase new username is already in the list of lowercase current usernames
    var isUsernameTaken = false;
    for (var _c = 0, lowercased_current_users_1 = lowercased_current_users; _c < lowercased_current_users_1.length; _c++) {
        var current_username = lowercased_current_users_1[_c];
        if (current_username === lowercased_new_username) {
            isUsernameTaken = true;
            break;
        }
    }
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(new_username, "' is not available. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 33 Solution Output___________________________");
console.log("\n");
/*
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
    var number = numbers_1[_d];
    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 34 Solution Output___________________________");
console.log("\n");
/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.
• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!
*/
var favorite_pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the name of each pizza using a for loop
console.log("Pizza Names:");
for (var _e = 0, favorite_pizzas_1 = favorite_pizzas; _e < favorite_pizzas_1.length; _e++) {
    var pizza = favorite_pizzas_1[_e];
    console.log(pizza);
}
// Modify the for loop to print sentences about each pizza
console.log("\nPizza Statements:");
for (var _f = 0, favorite_pizzas_2 = favorite_pizzas; _f < favorite_pizzas_2.length; _f++) {
    var pizza = favorite_pizzas_2[_f];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional sentence about liking pizza
console.log("\nI really love pizza!");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 35 Solution Output___________________________");
console.log("\n");
/*
35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/
var animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
console.log("Animal Names:");
for (var _g = 0, animals_1 = animals; _g < animals_1.length; _g++) {
    var animal = animals_1[_g];
    console.log(animal);
}
// Modify the for loop to print statements about each animal
console.log("\nAnimal Statements:");
for (var _h = 0, animals_2 = animals; _h < animals_2.length; _h++) {
    var animal = animals_2[_h];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Additional sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 36 Solution Output___________________________");
console.log("\n");
/*
36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/
function make_shirt(size, message) {
    console.log("The shirt is size ".concat(size, " and has the message: \"").concat(message, "\"."));
}
// Call the function with specific size and message
make_shirt("Medium", "I love TypeScript!");
// You can call the function with different arguments as needed
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 37 Solution Output___________________________");
console.log("\n");
/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/
function mak_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is size ".concat(size, " and has the message: \"").concat(message, "\"."));
}
// Create a large shirt with the default message
mak_shirt();
// Create a medium shirt with the default message
mak_shirt("Medium");
// Create a shirt of any size with a different message
mak_shirt("Small", "Programming is fun!");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 38 Solution Output___________________________");
console.log("\n");
/*
38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Tokyo"); // Using the default country
describe_city("New York", "USA");
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 39 Solution Output___________________________");
console.log("\n");
/*
39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned.
*/
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs
var result1 = city_country("Lahore", "Pakistan");
var result2 = city_country("Tokyo", "Japan");
var result3 = city_country("New York", "USA");
// Print the values returned by the function
console.log(result1);
console.log(result2);
console.log(result3);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 40 Solution Output___________________________");
console.log("\n");
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album("Artist1", "Album Title 1");
var album2 = make_album("Artist2", "Album Title 2", 12); // Including the number of tracks
var album3 = make_album("Artist3", "Album Title 3");
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 41 Solution Output___________________________");
console.log("\n");
/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magician_names = ["Sachn", "Sing", "Gangavish", "Ranjit"];
// Call the function to show the magicians
show_magicians(magician_names);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 42 Solution Output___________________________");
console.log("\n");
/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
function show_magician(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Modify the array by adding "the Great" to each magician's name
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Array of magician's names
var magician_nams = ["Sachn", "Sing", "Gangavish", "Ranjit"];
// Call make_great() to modify the array
var great_magicians = make_great(magician_nams);
// Call show_magician() to see that the list has been modified
show_magician(great_magicians);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 43 Solution Output___________________________");
console.log("\n");
/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
function show_magicians1(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
function mak_great(magicians) {
    // Return a new array with the Great added to each magician's name
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Array of magician's names
var magician_names1 = ["Sachn", "Sing", "Gangavish", "Ranjit"];
// Call make_great() with a copy of the array to keep the original unchanged
var great_magicians1 = mak_great(__spreadArray([], magician_names1, true));
// Call show_magicians() with each array to show the original and modified names
console.log("Original Magicians:");
show_magicians1(magician_names1);
console.log("\nGreat Magicians:");
show_magicians1(great_magicians1);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 44 Solution Output___________________________");
console.log("\n");
/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length > 0) {
        console.log("- ".concat(items.join('\n- ')));
    }
    else {
        console.log("No items selected for the sandwich.");
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function three times with a different number of arguments each time
order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato", "Mayo");
order_sandwich("Ham", "Swiss", "Mustard");
order_sandwich();
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Question No 45 Solution Output___________________________");
console.log("\n");
function store_car_info(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional information to the car object
    for (var i = 0; i < additionalInfo.length; i += 2) {
        var key = additionalInfo[i];
        var value = additionalInfo[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and two other name-value pairs
var carInfo = store_car_info("Toyota", "Camry", "color", "Blue", "optionalFeature", "Navigation");
// Print the object to make sure all the information was stored correctly
console.log(carInfo);
// Adding two lines of space
console.log("\n\n");
//****************************************************************************************************************** */
console.log("__________________Assignment No 1 Completed! ___________________________");
