console.log('Soal No. 1 (Membuat kalimat)')

var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`)

console.log('')
console.log('Soal No.2 Mengurai kalimat (Akses karakter dalam string)')

var sentence = "I am going to be React Native Developer"; 
/*
I am going to be React Native Developer
0123456789012345678901234567890123456789
*/
var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence.substr(5,5); // lakukan sendiri 
var fourthWord = sentence.substr(11,2); // lakukan sendiri 
var fifthWord = sentence.substr(14,2); // lakukan sendiri 
var sixthWord = sentence.substr(17,5); // lakukan sendiri 
var seventhWord = sentence.substr(23,6); // lakukan sendiri 
var eighthWord = sentence.substr(30,9); // lakukan sendiri 


console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

console.log('')
console.log('Soal No. 3 Mengurai Kalimat (Substring)')

var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4,14); // do your own! 
var thirdWord2 = sentence2.substring(15,17); // do your own! 
var fourthWord2 = sentence2.substring(18,20); // do your own! 
var fifthWord2 = sentence2.substring(21); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

console.log('')
console.log('Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String')

var sentence3 = 'wow JavaScript is so cool'; 
/*
wow JavaScript is so cool
012345678901234567890123456789
*/
var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4,14); // do your own! 
var thirdWord3 = sentence3.substring(15,17); // do your own! 
var fourthWord3 = sentence3.substring(18,20); // do your own! 
var fifthWord3 = sentence3.substring(21); // do your own! 

var firstWordLength = exampleFirstWord3.length  
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3.length); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3.length); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3.length); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord3.length); 