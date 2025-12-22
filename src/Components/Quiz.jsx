import React from 'react';
/*
 *  Quiz Component
 * Responsibilities:
 * - Displays current question and answer options
 * - Handles user answer selection
 * - Navigates to next question or results screen
*/

/** 
 * Quiz Function
 * @param {Object} props - Component properties
 * @param {Array} props.questions - Array of quiz questions
 * @param {number} props.currentQuestionIndex - Index of the current question
 * @param {Function} props.setCurrentQuestionIndex - Function to update current question index
 * @param {Function} props.setUserAnswers - Function to update user answers array
 * @param {Function} props.setQuizState - Function to update quiz state
 * */ 
function Quiz ({ questions, currentQuestionIndex, setCurrentQuestionIndex, setUserAnswers, setQuizState, userAnswers }) {

    // Current question based on index
const currentQuestion = questions[currentQuestionIndex];

/* 
* Handle answer selection
* This function updates the user answers array and navigates to the next question or results screen.
* @param {string} selectedOption - The option selected by the user
*/

function handleAnswerClick (selectedOption) {
    setUserAnswers([...userAnswers, selectedOption]);
    if (currentQuestionIndex === questions.length - 1) {
        setQuizState('results');
    } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
}

return (
    <div className="quiz">
        <h2>Question {currentQuestionIndex + 1}: {currentQuestion.question}</h2>

       <p> Question {currentQuestionIndex + 1} of {questions.length}</p>

        <div className='answer-section'>
            {currentQuestion.options.map((option) => (
                <button key={option} onClick={() => handleAnswerClick(option)}>{option}</button>
            ))}
        </div>
    </div>
)}

export default Quiz;