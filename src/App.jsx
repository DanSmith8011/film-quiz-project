import { questions, shuffleArray } from './data/questions';
import { useState } from 'react'; 
import './App.css';
import Quiz from './Components/Quiz';
import Results from './Components/Results';
import Instructions from './Components/Instructions';

function App() {
    
    const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray(questions));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizState, setQuizState] = useState('instructions'); 
    const [userAnswers, setUserAnswers] = useState([]);
    
    const handleStartQuiz = () => {
      setQuizState('inProgress')
    };
    const screenToDisplay = () => {
        switch(quizState) {
          case 'instructions':
            return (
              <Instructions onStart={handleStartQuiz} />
            );
          
          case 'inProgress':
            return (
              <Quiz 
                questions={shuffledQuestions} 
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setUserAnswers={setUserAnswers}
                setQuizState={setQuizState}
                userAnswers={userAnswers} 
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