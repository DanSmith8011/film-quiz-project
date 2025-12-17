
/**
 * Quiz Questions Data
 * 
 * Contains all film quiz questions with multiple choice options
 * Each question has: id, question text, options array, correct answer, and explanation
 */
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
    },
    {
        id: 4,
        question: 'Which film won the Academy Award for Best Picture in 2020?',
        options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        answer: "Parasite",
        explanation: "Parasite made history as the first non-English language film to win Best Picture at the 2020 Academy Awards."
    },
    {
        id: 5,
        question: 'Who directed The Shawshank Redemption?',
        options: ["Frank Darabont", "Steven Spielberg", "Christopher Nolan", "Ridley Scott"],
        answer: "Frank Darabont",
        explanation: "Frank Darabont directed The Shawshank Redemption in 1994, based on a Stephen King novella."
    },
    {
        id: 6,
        question: 'In which year was the original Jurassic Park released?',
        options: ["1991", "1993", "1995", "1997"],
        answer: "1993",
        explanation: "Jurassic Park was released in 1993 and became a groundbreaking film for its use of CGI and animatronics."
    },
    {
        id: 7,
        question: 'Which actor played the Joker in The Dark Knight?',
        options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
        answer: "Heath Ledger",
        explanation: "Heath Ledger's iconic portrayal of the Joker in The Dark Knight (2008) earned him a posthumous Academy Award for Best Supporting Actor."
    },
    {
        id: 8,
        question: 'What is the name of the fictional African country in Black Panther?',
        options: ["Wakanda", "Zamunda", "Genovia", "Sokovia"],
        answer: "Wakanda",
        explanation: "Wakanda is the technologically advanced nation in Black Panther, hidden from the rest of the world."
    },
    {
        id: 9,
        question: 'Who composed the score for Inception?',
        options: ["John Williams", "Hans Zimmer", "Ennio Morricone", "Howard Shore"],
        answer: "Hans Zimmer",
        explanation: "Hans Zimmer composed the memorable score for Inception, including the famous 'BRAAAM' sound that became iconic."
    },
    {
        id: 10,
        question: 'Which film features the quote "Here\'s looking at you, kid"?',
        options: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
        answer: "Casablanca",
        explanation: "This famous quote is from the 1942 classic Casablanca, spoken by Humphrey Bogart's character Rick Blaine."
    }

];


/**
 * Shuffles an array randomly using Fisher-Yates algorithm
 * Used to randomize question order for each quiz attempt
 * 
 * @param {Array} array - The array to shuffle
 * @returns {Array} - New shuffled array
 */

export const shuffleArray = (array) => {
    const shuffled = [...array];    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    return shuffled;
}
export default questions;


