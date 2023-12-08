
// Variable to be changed
const affirmation = document.querySelector('.affirmation');
const mini = document.querySelector('.mini');
const next = document.querySelector('#newAff');
//Affirmation Collections
const affCollection = [
    {
        affirmation: "My love for you knows no bounds, it's infinite and eternal.",
        reference: "'Romeo and Juliet' | William Shakespeare"
    },
    {
        affirmation: "You are the sunshine that brightens my darkest days.",
        reference: "'Pride and Prejudice' | Jane Austen"
    },
    {
        affirmation: "In your eyes, I see a reflection of my soul's deepest desires.",
        reference: "'Jane Eyre' | Charlotte Brontë"
    },
    {
        affirmation: "Our love story is written in the stars, destined to shine forever.",
        reference: "'The Fault in Our Stars' | John Green"
    },
    {
        affirmation: "With you, I've found a love that's both my anchor and my wings.",
        reference: "'Eat, Pray, Love' | Elizabeth Gilbert"
    },
    {
        affirmation: "You are the melody to my heart's most beautiful song.",
        reference: "'The Notebook' | Nicholas Sparks"
    },
    {
        affirmation: "Your love is the canvas upon which my life's masterpiece is painted.",
        reference: "'The Great Gatsby' | F. Scott Fitzgerald"
    },
    {
        affirmation: "With every beat of my heart, I love you more deeply than before.",
        reference: "'Wuthering Heights' | Emily Brontë"
    },
    {
        affirmation: "Being with you feels like coming home to the place I belong.",
        reference: "'Outlander' | Diana Gabaldon"
    },
    {
        affirmation: "In your arms, I've found my sanctuary, my refuge from the world.",
        reference: "'Gone with the Wind' | Margaret Mitchell"
    },
    {
        affirmation: "Your love is the poetry that fills the pages of my life's story.",
        reference: "'Love in the Time of Cholera' | Gabriel Garcia Marquez"
    },
    {
        affirmation: "With you, every moment feels like a timeless love story.",
        reference: "'The Princess Bride' | William Goldman"
    },
    {
        affirmation: "I want to spend my forever wrapped in the warmth of your love.",
        reference: "'PS, I Love You' | Cecelia Ahern"
    },
    {
        affirmation: "You are the answer to every prayer I've ever whispered to the heavens.",
        reference: "'The Notebook' | Nicholas Sparks"
    },
    {
        affirmation: "Loving you feels like discovering the missing piece of my heart's puzzle.",
        reference: "'A Walk to Remember' | Nicholas Sparks"
    },
    {
        affirmation: "With you, every moment is a love letter written upon my soul.",
        reference: "'Pride and Prejudice' | Jane Austen"
    },
    {
        affirmation: "You are the love story I always dreamt of but never knew existed.",
        reference: "'The Time Traveler's Wife' | Audrey Niffenegger"
    },
    {
        affirmation: "In your eyes, I've found a love deeper than any ocean and wider than the sky.",
        reference: "'Jane Eyre' | Charlotte Brontë"
    },
    {
        affirmation: "Your love is the sweetest melody that serenades my heart.",
        reference: "'The Great Gatsby' | F. Scott Fitzgerald"
    },
    {
        affirmation: "With you, love feels like a journey worth taking, a tale worth telling.",
        reference: "'Outlander' | Diana Gabaldon"
    }
];

//function for button
next.addEventListener('click', function() {
    //Randomizer
    const random = Math.floor(Math.random() * affCollection.length);
    //Changing content
    affirmation.innerText = affCollection[random].affirmation;
    mini.innerText = affCollection[random].reference;
})