"use strict";
//    45 Assignments
//     Assignment No 2
//let personName :string = "Eric";
//console.log(`Hello ${personName},would you like to learn some python?`);
//     Assignment No 3
//let fullName : string = "Ahmed shah";
// in  lowercase
//console.log("lowercase:", fullName.toLowerCase());
//   in Uppercase
//console.log("uppercase:",fullName.toUpperCase());
//   in Tittlecase
//console.log("titlecase:",fullName.replace(/\b\w/g,c=> c.toUpperCase()));
//    Assignment No 4
//let quote: string = "A person who never made a mistake never tried anything new.";
//let author: string = "Albert Einstein";
//console.log(`${author} one said,"${quote}"`);
//   Assignment 5
//let quote: string = "A person who never made a mistake never tried anything new";
//let famouse_person: string = "Albert Einstein";
//let message = `${famouse_person} once said,${quote}`;
//console.log(message);
//     Assignment 6
//let personName: string = `\n\t BABAR AZAM\t\n`;
//console.log(personName);
//let stripped: string = personName.trim();
//console.log(stripped);
//     Assignment No 7
//let additionResult: number = 5+3;
//console.log("Addition Result:", additionResult);
//let subtractionResult: number = 11-3;
//console.log("Subtraction Result:", subtractionResult );
//let multiplycationResult: number = 4*2;
//console.log("Multiplycation Result:",multiplycationResult );
//let divisionResult: number = 16/2;
//console.log("Divisiion Result:",divisionResult ); 
//   Assignment 8
//console.log(5+3)
//console.log(11-3)
//console.log(4*2)
//console.log(16/2)
//   Assignment 9
//let favauriteNumber: number = 4;
//console.log (`My favourite number is ${favauriteNumber}`);
//    Assignment No 10
//   My name is AMBER
//  Date : 18/02/2024
// This programme will multiplycation
//console.log(5*2);
//   Assignment No 11
//let friendsName : string [] = ["Ayesha","Humaira", "Hina","Kiran"];
//console.log(friendsName[0]);
//console.log(friendsName[1]);
//console.log(friendsName[2]);
//console.log(friendsName[3]);
// Assignment No 12
let friendsName = ["Ayesha", "Humaira", "Hina", "Kiran"];
let message = "Do you like to play hockey";
console.log(friendsName[0] + " " + message);
console.log(friendsName[1] + " " + message);
console.log(friendsName[2] + " " + message);
console.log(friendsName[3] + " " + message);
//   Assignment No 13
//let tranportation : string [] = ['civic','bike','bus','suzuki'];
//for(let i=0; i<tranportation.length; i++){
// console.log('I would like to own a' + tranportation[i]);
//}
// Assignment No 14
//let guest_list : string []= ['ali','farhan','ayesha','raza'];
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you on dinner tommorow.\n\nThank You');
//}
// Assignment No 15
//let guest_list : string []= ['ali','farhan','ayesha','raza'];
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tommorrow.\nThank You\n')
//}
//let not_present : string = 'farhan';
//let new_guest : string = 'Babar Azam';
//guest_list[1] = new_guest
//for (let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorrow.\nThank You')
//}
//console.log(`Mr.${not_present} will not coming tommorrow dinner. `)
//   Assignment No 16
//guest_list.unshift('shaheen,sarfaraz,rizwan')
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected Sir/Madam' + " "+ guest_list[i] + ',\nWe invited you on dinner tommorrow.we found big table so we decide to invite 3 more guest\nThank You')
//}
//  Assignment No 17
//console.log('\nUnfortunately we can not arrange big table, two people allow.')
//while(guest_list.length>2){
//let remove_guest = guest_list.pop();
//console.log(`Sorry sir/madam ,${remove_guest} you are not invited for dinner.`);
//}
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tommorrow dinner\nThank You\n');
//}
//guest_list.splice(0,2)
//console.log(guest_list)
//   Assignment No 18
//let places : string [] = ['cape town','delhi','faisalabad','bankok','ahmedabad'];
//console.log('original' +" " + places);
//print yur array in alphabatical order without nodifying the actual list.
//console.log('copy ' + [...piaces].sort());
//  show that your array is still in its original order by printing it.
//console.log('original' +" " + places);
//print your array in reverse alphabatical order without changing the order. of the orignal list 
//console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its orignal order by printing it again.
//console.log('copy ' + [...places].sort().reverse());
// reverse the order of your list .print the array to how that its order has changed.
//console.log('original' + " "+ places.sort());
// reverse the order of your list again.print the list to show its back to its original order.
//console.log('original' + " "+ places.sort().reverse());
//     Assignment No 19
//console.log(`\nUnfortunately we can not arrange big table, two people allow.`)
//while(guest_list.length>2){
//let remove_guest = guest_list.pop();
//console.log(`Sorry sir/madam , ${remove_guest} you are not invited for dinner.`);
//}
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
//}
//guest_list.splice(0,2);
//console.log(guest_list);
//    Assignment No 20
//let countries:string[] = ["usa","canada","france","germany","japan"]
//console.log("list of countries:", countries.forEach(country => {
// console.log(country);
//}));
//    Assignment No 21
//let objectContainingItems: {[key: string]: any} = {
//"laptop": {
//name: "laptop",
//price: "80000",
//description: "high performance laptop with fast processor"
//},
//"mouse": {
//name: "mouse",
//price: "10000",
//descriptin: "high perffmance laptop with fast processor"
//},
//"keyboard": {
// name: "keyboard",
//price: "5000",
// description: "high performance laptop with fast processor"
//}
//}
//console.log(objectContainingItems);
//   Assignment No 22
//let intentionError : number[] = [1,2,3,4,5];
//console.log(intentionError[10]);
//let intentionErros : number[] = [1,2,3,4,5];
//console.log(intentionErros[2]);
//    Assignment No 23
// test 1
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
// test 2
//console.log("Is car == 'toyota' ? I predict False.")
//console.log(car == 'toyota')
// test 3
//console.log("Is car === 'subaru? I predict True")
//console.log(car === 'subaru')
// test 4
//console.log("Is car === 'subaru'? I predict False")
//console.log(car === 'subaru');
// test 5
//console.log("Is car.length > 0? Ipredict true");
//console.log(car.length > 0);
// test 6
//console.log("Is car .length< 5? I predict False ");
//console.log(car.length < 5 );
// test 7
//console.log("Is car .toUpperCase() === 'SUBARU'? Ipredict True");
//console.log(car.toLocaleUpperCase() === 'SUBARU');
// test 8
//console.log("Is car .toUpperCase() === 'subaru'? I predict True");
//console.log(car.toLocaleUpperCase() === 'subaru');
// test 9
//console.log("Is car .toLowerCase() === 'subaru'? I predict True");
//console.log(car.toLowerCase() === 'subaru');
// test 10
//console.log("Is car.includes('u')? I predict True");
//console.log(car.includes('u'));
//    Assignment No 24
//let car: string = 'subaru';
//let age: number = 25;
//let numbers: number = [] = [1,2,3,4];
//  ** string Tests**
//   test 1 : Equality (true)
//console.log("Is car == 'subaru'? I predict True");
//console.log(car == 'Subaru'); // true (case-insesitive)
// test 2 : Strict equality (false)
//console.log("Is car === 'Subaru'? I predict False.");
//console.log(car === 'Subaru'); // false (case-insensitive)
//  test 3 : inequality (true)
//console.log("Is car != 'Toyota'? I predict True");
//console.log(car != 'Toyota'); // true 
//  test 4 : inequality (false)
//console.log("Is car !== 'subaru'? I predict False.");
//console.log(car !== 'subaru'); // false (case-sensitive)
//  lowerCase Function tests
// test 5: lowerCase conversion (true)
//console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
//console.log(car.toLowerCase()== 'subaru');// true (converted to lowercase)
// test 6: LowerCase conversion (false)
//console.log("Is car === car.toLowerCase()? I predict False.");
//console.log(car === car.toLowerCase()); // false
// **Numerical tests**
//  test 7: Equality (true)
//console.log("Is age == 25? I predict True");
//console.log(age == 25);  // true
//  test 8: Inequality (false)
//console.log("IS age != 30? I predict True.");
//console.log(age != 30); //  true
//  test 9: Greater than (false)
//console.log("Is age > 30? I predict false.");
//console.log(age > 30); // false
//  test 10: Less than or equal (true)
//console.log("Is age <= 25? I predicct True. ");
//console.log(age <= 25);
//  ** Logical Operators  **
//  test 11: AND (true) 
//console.log("Is age > 20 && age < 30? I predict True.");
//console.log(age > 20 && age <30);
//  test 12: OR (false)
//console.log("Is age > 30 || age < 18? I predict False.");
//console.log(age > 30 || age < 18);
// ** Array test **
// test 13: In array
//console.log("Is 3 in number? I predict True");
//console.log(3 in numbers);
//  test 14: NOT in array (false)
//console.log("Is 5 not numbers? I predict True.");
//console.log(5 not in numbers);
//      Assignment No 25
//let alien_color: string ="green";
//if(alien_color == "green"){
//console.log("the player just earned 5 points.")
//}
//alien_color = "red";
//if(alien_color == "green"){
//console.log("the player just earned 5 points");
//}
// Assignment No 26
//let alien_color: string = "green";
//if(alien_color == "green" ){
//console.log("the player just earned 5 points for shooting the alien.");
//}
//else{
//console.log("the player just earned 10 points.")
//}
//alien_color = "red";
//if(alien_color == "green"){
//console.log("the player just earned 5 points for shooting the alien.");
//}
//    Assignment No 27
//let alien_color: string = "green";
//if(alien_color == "green"){
// console.log("the player just earned 5 points.")
//}
//else if(alien_color == "yellow"){
// console.log("the player just earned 10 points.")
//}
//else if(alien_color == "red"){
//console.log("the player just earned 15 points")
//}
//else{
//console.log("please select right color")
//}
//  version 2
//alien_color = "red";
//if(alien_color == "green"){
//console.log("the player earned 5 points.")
//}
//else if(alien_color == "yellow"){
// console.log("the player just earned 10 points.")
//}
//else if(alien_color == "red"){
//console.log("the player just earned 15 points.")
//}
//else{
//console.log("please select right color")
//}
//  version 3
//alien_color = "yellow";
//if(alien_color == "green"){
// console.log("the player earned 5 points.")
//}
//else if(alien_color == "yellow"){
// console.log("the player just earned 10 points. ")
//}
//else if(alien_color == "red"){
//console.log("the player just earned 15 points.")
//}
//else{
// console.log("please select right color")
//}
//    Assignments No 28
//let age: number = 25;
//if(age<2){
//console.log("the person is a baby")
//}
//else if(age>=2 && age < 4){
//console.log("person is a tiddler.")
//}
//else if(age>=4 && age <13){
// console.log("person is kid.")
//}
//else if(age>=13 && age <20){
// console.log("person is a teenager.")
//}
//else if(age>=20 && age <65){
//console.log("person is a adult.")
//}
//else{
// console.log("person is an elder.")
//}
//       Assignment 29
//let faourite_fruits : string[] = ["apple","orange","grapes"];
//if(faourite_fruits.includes('apple')){
// console.log('I really like apple!')
//}
//if(faourite_fruits.includes('orange')){
//console.log('I really like orange!')
//}
//if(faourite_fruits.includes('mango')){
// console.log('I really like mango')
//}
//if(faourite_fruits.includes('grapes')){
//console.log('I really like grapes!')
//}
//if(faourite_fruits.includes('bananas')){
//console.log('I really like bananas')
//}
//    Assignment No 30
//let users : string [] = ['sana','babar','taha','admin']
//for(let user of users){
// if(user === "admin"){
// console.log("Hello admin, would you like to see a status report?")
//}
//else{
// console.log(`Hello ${user}, thank you for logging in again.`)
//}
//}
//     Assignment No 31
//let users : string[] = ['sana','babar','saba','taha','admin']
//if(users.length === 0){
//console.log("we need to find some users!  ")
//}
//else{
// users = [];
//console.log("All user have been removed"   + users.length)
//}
//       Assignment No 32
//let current_users: string[] = ["saba","admin","ahmed","babar","raza"];
//let new_users: string [] = ["fawad","hussain","user7","admin","user9"];
//new_users.forEach((newUser) => {
//if(
//current_users.some(
// (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
// )
//) {
//console.log(`${newUser} will need to enter a new username`)
//} else {
//console.log(`${newUser} is available.`);
//}
//});
//     Assignment No 33
//let myNumbers = [1,2,3,4,5,6,7,8,9];
//for(let i=0;i < myNumbers.length; i++){
//if(myNumbers[i] == 1){
//console.log(`${myNumbers[i]}st`);
//}else if(myNumbers[i] == 2){
// console.log(`${myNumbers[i]}nd`);
//}else if(myNumbers[i] ==3){
//console.log(`${myNumbers[i]}rd`);
//}else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
//console.log(`${myNumbers[i]}th`);
//}
//}
//       Assignment No 34
//let myPizza = ["Cheeze Piizza","Pepperoni Pizza","Vegeterian Pizza"];
//for(let i = 0; i < myPizza.length; i++){
//console.log(myPizza[i]);
//}
//for(let i = 0; i < myPizza.length; i++){
//console.log(`I like to eat ${myPizza}[i]`);
//}
//console.log(
// `\nI really like to eat pizzas .pizza comes in a variety of flavors and toopings, allowing individuals to customize it to their liking`
//);
//     Assignment No 35
//let animals: string[] = ["dog","cat","rabbit"];
//animals.forEach(animal => {
//console.log(`A ${animal} would make a great pet.`);
//});
//console.log("Any of these animals would make a great pet!");
//       Assignment No 36
//function make_shirt(size: string, message: string){
//console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
//}
//make_shirt("medium","Code is life");
//     Assignment No 37
//function make_shirt(size: string = "large",message: string = "I love Typescript") {
//console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
//}
//make_shirt();
//make_shirt("medium");
//make_shirt("small","Dive into Coding");
//      Assignment No 38
//function describe_city(nameOfCity: string,country: string = "Pakistan"){
//return `${nameOfCity} is in ${country}`;
//};
//let city1 = describe_city("cape town","South africa");
//let city2 = describe_city("dehli","India");
//let city3 = describe_city("hyderabad","Pakistan");
//let city4 = describe_city("uae","Dubai");
//console.log(city1);
//console.log(city2);
//console.log(city3);
//console.log(city4);
//      Assignment No 39
//function city_country(city: string,country: string){
// return `"${city},${country}"`
//console.log(`"${city}, ${country}`)
//}
//city_country("karachi","Pakistan");
//let myCities = city_country("karachi","pakistan");
//console.log(myCities)
//console.log(city_country("Dubai","UAE"));
//console.log(city_country("London","United King"));
//console.log(city_country("Riyaz","Saudia Arabia"));
//       Assignment No 40
//function make_album(artisName: string, albumTitle: string){
//return {artisName,albumTitle}
//}
//let album1 = make_album("Ali","Rang-e-mohabbat");
//let album2 = make_album("Madad","Roshan Andhera");
//let album3 = make_album("Ayaz","Mausam-e-dil");
//console.log(album1);
//console.log(album2);
//console.log(album3);
//  Nunber of tracks
//function make_album2(artisName: string, albumTitle: string, numberofTracks?: number){
// return {artisName, albumTitle,numberofTracks}
//}
//let album4 = make_album2("Ali","dil hai", 30);
//let album5 = make_album2("Madad","ajeeb khani",55);
//let album6 = make_album2("babar","typescript ki coding",78);
//console.log(album4);
//console.log(album5);
//console.log(album6);
//        Assignment No 41
//let magicians: string[] = ["brad","Rameez","ainak wala"];
//function show_magicians(magicians:string[]){
// magicians.forEach(magician => {
// console.log(magician)
//});
//}
//show_magicians(magicians);
//              Assignment No 42
//let magicians: string[] = ["DON","RAMEEZ","CHRIS"];
//function make_great(magicians: string[]) {
// for (let i = 0; i < magicians.length; i++) {
// magicians[i] = magicians[i] + "the Great";
//}
//}
//make_great(magicians);// Modifies the orignal array
//  show_magicians(magicians);//  show modified names
//        Assignment No 43
//let magicians: string[] = ["Alice","David","Chris"];
//function make_great(magicians: string[]): string[] {
//let greatMagicians = [];
//magicians.forEach(magician => {
// greatMagicians.push(`${magician} the Great`);
//});
// return greatMagicians;
//}
//let greatMagicians = make_great(magicians.slice()); // creat a new modified array
//console.log("Original magicians");
//show_magicians(magicians); //  show original names
//console.log("Great magicians:");
//show_magicians(greatMagicians); //  show modified names
//      Assignment No 44
//function make_sandwich(...items: string[]) {
//console.log(`Making a sandwich with: ${items.join(',  ')}`)
//}
//make_sandwich("ham","chees");
//make_sandwich("turkey","lettuce","tomato","ketchup","chiken");
//make_sandwich("avocade","sprouts","mustard","mayo");
//     Assignment No 45
//function make_car(manufacturer: string,model:string, ...options: [string,any[]]): object{
//let car = {manufacturer,model };
//options.forEach(([key,value]) => car [key] = value);
//return car;
//};
//console.log(make_car("Toyota","corolla",["color","red"],["year",2020]));
//console.log(make_car("Ford","Fiesta",["color","blue"],["sunroof","true"]));
