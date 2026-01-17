import { useState, useEffect } from 'react';
import './App.css'
import 'animate.css';
import Birthday from './components/Birthday';
import PulseLoader from "react-spinners/PulseLoader";
import CatCenter from './media/dance-party-cat.gif';
import CatRight from './media/dancing-cat-cat.gif';
import CatLeft from './media/peach-cat-goma.gif';
import PartyHorn from './media/party-horn.mp3';

const App = () => {
  const birthdayPerson = import.meta.env.VITE_BIRTHDAY_PERSON
  const finnish = import.meta.env.VITE_FINNISH

  const [buttonIsPressed, setButtonIsPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);
  const horn = new Audio(PartyHorn);
  const useFinnish = finnish === 'true' ? true : false

  const buttonTexts = useFinnish 
    ? ['यहाँ टैप करें', 'क्या हुआ? क्लिक करो!', 'अरे! क्लिक तो करो! 😄', 'इंतज़ार किस बात का? 🎉']
    : ['Tap Here', 'What happened? Click me!', 'Come on! Click it! 😄', 'What are you waiting for? 🎉'];

  document.title = useFinnish ? 'जन्मदिन मुबारक हो!' : 'Happy Birthday!';

  useEffect(() => {
    if (!buttonIsPressed && !loading) {
      const interval = setInterval(() => {
        setButtonTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [buttonIsPressed, loading, buttonTexts.length]);

  const handleClick = () => {
    setButtonIsPressed(buttonIsPressed ? false : true);
  }

  return (
   <>
    {buttonIsPressed ? 
      <Birthday 
        catLeft={CatLeft}
        catCenter={CatCenter}
        catRight={CatRight}
        birthdayPerson={birthdayPerson} 
        handleClick={handleClick} 
        horn={horn} 
        useFinnish={useFinnish} 
      />
      : 
      (!loading ?
        <button className='animate__animated animate__zoomIn animate__fast' onClick={() => {
          setLoading(true);
          setTimeout(() => {
            horn.play();
            handleClick();
            setLoading(false);
          }, 1000);
        }}>
          {buttonTexts[buttonTextIndex]}
        </button>
        :
        <PulseLoader color='rgba(255, 255, 255, 0.87)' /> 
      )
    }
   </>
  )
}

export default App;