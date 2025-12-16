import React, { use } from 'react';
function Quiz ({ questions, currentQuestionIndex, setCurrentQuestionIndex, setUserAnswers, setQuizState, userAnswers }) {

const currentQuestion = questions[currentQuestionIndex];

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

<div className='answer-section'>
{currentQuestion.options.map((option) => (
    <button key={option} onClick={() => handleAnswerClick(option)}>{option}</button>
))}
</div>
    </div>
)}

export default Quiz;