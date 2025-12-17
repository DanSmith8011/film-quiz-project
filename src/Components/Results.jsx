import React from 'react';

/**
 * Results Component
 * 
 * Displays the user's final quiz score
 * Compares user answers to correct answers
 * Provides option to retake the quiz
 * 
 * @param {Array} questions - Array of quiz questions with correct answers
 * @param {Array} userAnswers - Array of user's selected answers
 * @param {Function} setQuizState - Function to restart quiz
 */
function Results({ questions, userAnswers, setQuizState }) {

// Calculate score by comparing user answers to correct answers
const score = userAnswers.filter((answer, index) => {
    return answer === questions[index].answer;
}).length;

return ( 
    // Results display
    <div className="results">
        <h1>Quiz Results</h1>
        <h2>Your Score: {score}/{questions.length}</h2>
        <button onClick={() => setQuizState('instructions')}>Retake Quiz</button>
    </div>
)
}

export default Results;