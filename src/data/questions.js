
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
    },
    {
        id: 2,
        question: 'Who won the oscar for best actor in 2020?',
        options:["Joaquin Phoenix", "Leonardo DiCaprio", "Adam Driver", "Antonio Banderas"],
        answer: "Joaquin Phoenix",
    },
    {
        id: 3,
        question: 'Which movie features the quote "You dont know about real loss, because that only occurs when you love something more than you love yourself"?',
        options: ["Good Will Hunting", "Inception", "Interstellar", "Dunkirk"],
        answer: "Good Will Hunting",
    },
    {
        id: 4,
        question: 'Which film won the Academy Award for Best Picture in 2020?',
        options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        answer: "Parasite",
    },
    {
        id: 5,
        question: 'Who directed The Shawshank Redemption?',
        options: ["Frank Darabont", "Steven Spielberg", "Christopher Nolan", "Ridley Scott"],
        answer: "Frank Darabont",
    },
    {
        id: 6,
        question: 'In which year was the original Jurassic Park released?',
        options: ["1991", "1993", "1995", "1997"],
        answer: "1993",
    },
    {
        id: 7,
        question: 'Which actor played the Joker in The Dark Knight?',
        options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
        answer: "Heath Ledger",
    },
    {
        id: 8,
        question: 'What is the name of the fictional African country in Black Panther?',
        options: ["Wakanda", "Zamunda", "Genovia", "Sokovia"],
        answer: "Wakanda",
    },
    {
        id: 9,
        question: 'Who composed the score for Inception?',
        options: ["John Williams", "Hans Zimmer", "Ennio Morricone", "Howard Shore"],
        answer: "Hans Zimmer",
    },
    {
        id: 10,
        question: 'Which film features the quote "Here\'s looking at you, kid"?',
        options: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
        answer: "Casablanca",
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


