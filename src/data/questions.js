export const questions = [
    {
        id: 1,
        question: 'Who directed se7en?',
        options:["David Fincher", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
        answer: "David Fincher",
        explanation: "David Fincher directed the 1995 film se7en, which stars Brad Pitt and Morgan Freeman as detectives hunting a serial killer."
    },
    {
        id: 2,
        question: 'Who won the oscar for best actor in 2020?',
        options:["Joaquin Phoenix", "Leonardo DiCaprio", "Adam Driver", "Antonio Banderas"],
        answer: "Joaquin Phoenix",
        explanation: "Joaquin Phoenix won the Oscar for Best Actor in 2020 for his role as Arthur Fleck in the film Joker."
    },
    {
        id: 3,
        question: 'Which movie features the quote "You dont know about real loss, because that only occurs when you love something more than you love yourself"?',
        options: ["Good Will Hunting", "Inception", "Interstellar", "Dunkirk"],
        answer: "Good Will Hunting",
        explanation: "This quote is from the 1997 film Good Will Hunting, starring Matt Damon and Robin Williams."
    }
];


export const shuffleArray = (array) => {
    const shuffled = [...array];    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    return shuffled;
}
export default questions;
