import React from 'react';
function quiz ({ questions, currentQuestionIndex, setCurrentQuestionIndex, setUserAnswers, setQuizState }) 

const currentQuestion = questions[currentQuestionIndex];

return (
    <div className="quiz">
        <h2>Question {currentQuestionIndex + 1}: {currentQuestion.question}</h2>

<div className='answer-section'>
{currentQuestion.options.map((option) => (
    <button key={option}>{option}</button>
))}
</div>
    </div>
)