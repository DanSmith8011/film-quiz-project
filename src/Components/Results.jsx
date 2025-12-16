import React from 'react';

function Results ({ questions, userAnswers, setQuizState }) {

const score = userAnswers.filter((answer, index) => {
    return answer === questions[index].answer;
}).length;

return ( 
    <div className="results">
        <h1>Quiz Results</h1>
        <h2>Your Score: {score}/{questions.length}</h2>
        <button onClick={() => setQuizState('instructions')}>Retake Quiz</button>
    </div>
)
}

export default Results;