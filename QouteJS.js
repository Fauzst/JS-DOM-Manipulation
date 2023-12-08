//Variables
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelector('#new-quote');
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');
    
    const quotes = [{
        quote: 'Blah blah 1',
        person: 'Person 1'
    }, {
        quote: 'Blah blah 2',
        person: 'Person 2'
    }, {
        quote: 'Blah blah 3',
        person: 'Person 3'
    }, {
        quote: 'Blah blah 4',
        person: 'Person 4'
    }, {
        quote: 'Blah blah 5',
        person: 'Person 5'
    }, {
        quote: 'Blah blah 6',
        person: 'Person 6'
    }, {
        quote: 'Blah blah 7',
        person: 'Person 7'
    }];
    
    btn.addEventListener('click', function(){
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);
        quote.innerHTML = quotes[random].quote;
        person.innerHTML = quotes[random].person;
    })
})
