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
            <img src={catLeft} alt="Dancing cat" className="cat-top-mobile animate__animated animate__fadeInDown" />
            <p className="animate__animated animate__slow animate__tada birthday-text">
                {useFinnish ? `जन्मदिन मुबारक हो ${birthdayPerson}!` : `Happy Birthday ${birthdayPerson}!`}
            </p>
            
            <div className="cats-container">
                <img src={catLeft} alt="Dancing cat" className="cat-image cat-side cat-left animate__animated animate__fadeInLeft" />
                <img src={catCenter} alt="Party cat" className="cat-image cat-main animate__animated animate__zoomIn" />
                <img src={catRight} alt="Peach cat" className="cat-image cat-side cat-right animate__animated animate__fadeInRight" />
            </div>
            
            {cake && <p className="animate__animated animate__fadeInUp cake">🎂 ← {useFinnish ? 'आपके लिए केक' : 'Cake for you'}</p>}
            
            {/* Cat Right - Only on mobile, after cake */}
            {cake && <img src={catRight} alt="Peach cat" className="cat-bottom-mobile animate__animated animate__fadeInUp" />}
            
            {message && <p className="animate__animated animate__fadeInUp birthday-message">
                {useFinnish ? 'आपको एक शानदार वर्ष की शुभकामनाएं जो सफलता, खुशी और सार्थक उपलब्धियों से भरा हो। आप जो कुछ भी करने का मन बनाएं, वह सब हासिल करें!' : 'Wishing you a wonderful year ahead filled with success, happiness, and meaningful accomplishments. May you achieve everything you set your mind to!'}
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