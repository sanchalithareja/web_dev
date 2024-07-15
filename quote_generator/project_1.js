//variables

let btn=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes= [
    {quote: "Two things are infinite: the universe and human stupidity; and I am not sure about the universe." , 
    person: 'Albert Einstein'}, 
    {quote: "You've gotta dance like there's nobody watching, Love like youll never be hurt,Sing like theres nobody listening, And live like its heaven on earth.", 
    person:'William W. Purkey'},
    {quote: "Always forgive your enemies; nothing annoys them so much." , 
    person: 'oSCAR WILDE'},
    {quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”" , 
    person: 'Ralph Waldo Emerson'},
    {quote: "It is better to be hated for what you are than to be loved for what you are not.”" , 
    person: 'Andre Gide, Autumn Leaves'},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." , 
    person: 'nelson mandela'},
    {quote: "Life is what happens when you're busy making other plans." , 
    person: 'john lenon'},
    {quote: "The big lesson in life, baby, is never be scared of anyone or anything." , 
    person: 'frank sinatra'},
    {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." , 
    person: 'Albert Einstein'},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

