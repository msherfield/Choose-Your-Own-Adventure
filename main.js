alert('Welcome to Game Travelers');
confirm('Are you ready to travel to your first destination\r\Press OK for YES or Cancel for NO')
var Name = prompt('Please check in your destination by typing in your name')
console.log('Hello, ' + name + '!');
var isPopularInAmerica = confirm('Burgers are very popular in America')
var gameover = false

if (isPopularInAmerica) {
    console.log('Burgers are American');
} else {
    console.log('Burger are not popular in America');
    gameover = true
}

if (gameover == true) {
    alert('You travel has ended')  
}


alert('You have arrived at your second destination\r\
Mexico')
var Name = prompt('Please check in your destination by typing in your Intials');
console.log('Hola, ' + name + '!');

var isPopularInMexico = confirm('Tocos are very popular in Mexico.\r\ Click OK if True and Cencel if False')

if (isPopularInMexico) {
    console.log('Tacos are Popular');
} else {
    console.log('Tacos are not popular in Mexico');
    gameover = true
}

if (gameover == true) {
    alert('Your travel has ended')
}


alert('Thank you for visiting Mexico\r\Hope you enjoyed your stay')
alert('You have arrived at your second destination\r\
Korea')

var Name = prompt('Please check in your destination by typing in your dream vaction');
console.log('Awesome, ' + name + ' is wonderful');

var helloInKorean = confirm('Yeoboseyo means Hello in Korean.\r\ Click OK if True and Cancel if False')
if (helloInKorean) {
    console.log('Yeoboseyo means Hello');
} else {
    console.log('Yeoboseyo does not mean Hello');
    gameover = true
}
if (gameover == true) {
    alert('Your travel has ended')
}
    

alert('Thank you for visiting Korea\r\Hope you enjoyed your stay')

alert('If your are interested in learnnig more about Dream Vacations\r\ Go to www.DreamVacation.com')