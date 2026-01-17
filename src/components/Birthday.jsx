import { useEffect, useState } from "react";
import JSConfetti from 'js-confetti';

import 'animate.css';
import './Birthday.css'

const Birthday = ({ catLeft, catCenter, catRight, birthdayPerson, handleClick, useFinnish }) => {
    const confetti = new JSConfetti();
    const [cake, setCake] = useState(false);
    const [message, setMessage] = useState(false);
    const [displayResetButton, setDisplayResetButton] = useState(false);

    const resetStates = () => {
        setDisplayResetButton(false);
        setCake(false);
        setMessage(false);
    }

    useEffect(() => {
        confetti.addConfetti({
            confettiNumber: 350
        });
        setTimeout(() => {
            setCake(true);
            setTimeout(() => {
                setMessage(true);
                setTimeout(() => {
                    setDisplayResetButton(true);
                }, 800);
            }, 800);
        }, 2500);
    }, [])

    return (
        <>
            <p className="animate__animated animate__slow animate__tada birthday-text">
                {useFinnish ? `जन्मदिन मुबारक हो ${birthdayPerson}!` : `Happy Birthday ${birthdayPerson}!`}
            </p>
            
            <div className="cats-container">
                <img src={catLeft} alt="Dancing cat" className="cat-image cat-side cat-left animate__animated animate__fadeInLeft" />
                <img src={catCenter} alt="Party cat" className="cat-image cat-main animate__animated animate__zoomIn" />
                <img src={catRight} alt="Peach cat" className="cat-image cat-side cat-right animate__animated animate__fadeInRight" />
            </div>
            
            {cake && <p className="animate__animated animate__fadeInUp cake">🎂 ← {useFinnish ? 'आपके लिए केक' : 'Cake for you'}</p>}
            {message && <p className="animate__animated animate__fadeInUp birthday-message">
                {useFinnish ? 'आपको अच्छी सेहत और जीवन में निरंतर प्रगति की शुभकामनाएं। सीखते रहें और आगे बढ़ते रहें।' : 'Wishing you good health and steady progress in your life. Keep learning and moving forward.'}
            </p>}
            {displayResetButton && <button className="animate__animated animate__fadeInUp reset" onClick={() => {
                resetStates();
                handleClick();
            }}>
                {useFinnish ? 'रीसेट करें' : 'Reset'}    
            </button>}
        </>
    )
}

export default Birthday;