import { questions, shuffleArray } from './data/questions';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray(questions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useState('instructions'); 
  const [userAnswers, setUserAnswers] = useState([]);
}

export default App;