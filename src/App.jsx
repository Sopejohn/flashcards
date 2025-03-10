import { useState } from 'react'
import Card from './card'
import './App.css'

function App() {
  const [cards] = useState([
    {'question': 'Start', answer: 'Start'},
    {'question': 'What is the most common houseplant?', 'answer': 'Pothos'},
    {'question': 'What is the best way to water a plant?', 'answer': 'Bottom up'},
    {'question': 'What is the best way to get rid of pests on a plant?', 'answer': 'Neem oil'},
    {'question': 'What is the best light condition for a snake plant?', 'answer': 'Low to bright indirect light'},
    {'question': 'How often should you fertilize indoor plants?', 'answer': 'Once a month during the growing season'},
    {'question': 'What is a common sign of overwatering a plant?', 'answer': 'Yellowing leaves and root rot'},
    {'question': 'What is the best soil type for succulents?', 'answer': 'Well-draining cactus mix'},
    {'question': 'Why do houseplants develop brown leaf tips?', 'answer': 'Low humidity or inconsistent watering'},
    {'question': 'What is the easiest flowering houseplant to care for?', 'answer': 'Peace lily'},
    {'question': 'How can you increase humidity for tropical plants?', 'answer': 'Use a pebble tray or humidifier'}
  ]);
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
    const root = document.documentElement;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    root.style.setProperty('--random-color', `${r}, ${g}, ${b}`);
  }

  function nextCard() {
    setShowAnswer(false);
    setCurrentCard((currentCard + 1) % cards.length);
  }

  function previousCard() {
    setShowAnswer(false);
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
  }

  return (
    <div className="App">
      <div className='main'>
        <h1>The Ultimate Plant Parent!</h1>
        <p>How good of a plant parent are you? Test all of your plenty knowledge here!</p>
        <p>Number of cards: {cards.length}</p>
        <button className='card' onClick={toggleAnswer}>
          <Card 
            information={showAnswer ? cards[currentCard].answer : cards[currentCard].question}
          />
        </button>
        <div className="button-container">
          <button className="nav-button" onClick={previousCard}>⬅️</button>
          <button className="nav-button" onClick={nextCard}>➡️</button>
        </div>
      </div>
    </div>
  )
}

export default App