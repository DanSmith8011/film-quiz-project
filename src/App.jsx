import { questions, shuffleArray } from './data/questions';
import { useState } from 'react'; 
import './App.css';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Instructions from './components/Instructions';

function App() {
    
    const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray(questions));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizState, setQuizState] = useState('instructions'); 
    const [userAnswers, setUserAnswers] = useState([]);
    
    
    const screenToDisplay = () => {
        switch(quizState) {
          case 'instructions':
            return (
              <div className="instructions">
                <h1>Welcome to the Film Quiz!</h1>
                <p>Test your knowledge about films with this fun quiz. Click the button below to start!</p>
                <button onClick={() => setQuizState('inProgress')}>Start Quiz</button>
              </div>
            );
          
          case 'inProgress':
            return (
              <Quiz 
                questions={shuffledQuestions} 
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setUserAnswers={setUserAnswers}
                setQuizState={setQuizState}
              /> 
            );
            
          case 'results':
            return (
              <Results 
                questions={shuffledQuestions} 
                userAnswers={userAnswers}
                setQuizState={setQuizState} 
              />
            );
            
          default:
            
            return <h1>Error: Unknown Quiz State!</h1>; 
        }
    }

    
    return ( 
        <div className="App">
            {screenToDisplay()}
        </div>
    );
} 

export default App;