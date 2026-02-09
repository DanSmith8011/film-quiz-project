import { questions, shuffleArray } from './data/questions';
import { useState } from 'react'; 
import './App.css';
import Quiz from './Components/Quiz';
import Results from './Components/Results';
import Instructions from './Components/Instructions';

/**  
 * App Component
 * 
 * Main application component that manages the film quiz application.
 * Responsibilities:
 * - Manages quiz state (instructions, in progress, results)
 * - Randomizes questions using shuffle function
 * - Controls navigation between different screens
 * - Tracks user answers and current question index */

function App() {
    
  // State variables

  // Shuffled questions to ensure random order each quiz
  const [shuffledQuestions, _setShuffledQuestions] = useState(shuffleArray(questions));

  // Current question index to track progress
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Quiz state to manage which screen to display
  const [quizState, setQuizState] = useState('instructions'); 
 // User answers to store selected options
  const [userAnswers, setUserAnswers] = useState([]);
    
  // Handler to start the quiz
    const handleStartQuiz = () => {
      setQuizState('inProgress')
    };
    // Function to determine which screen to display based on quiz state
    const screenToDisplay = () => {
        switch(quizState) {
          // Display Instructions screen
          case 'instructions':
            return (
              <Instructions onStart={handleStartQuiz} />
            );
          // Display Quiz screen
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
            // Display Results screen
          case 'results':
            return (
              <Results 
                questions={shuffledQuestions} 
                userAnswers={userAnswers}
                setQuizState={setQuizState}
                setUserAnswers={setUserAnswers}
                setCurrentQuestionIndex={setCurrentQuestionIndex} 
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