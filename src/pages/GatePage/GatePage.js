import React, { useState, useEffect, useRef } from 'react';
import './GatePage.scss';
import confetti from 'canvas-confetti';

const GatePage = ({ onUnlock }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [celebrating, setCelebrating] = useState(false);
    const intervalRef = useRef(null);

    const fireConfetti = () => {
        // Left popper
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { x: 0.1, y: 0.8 },
            colors: ['#A3B5A4', '#ffffff', '#1A253E', '#f0d080', '#e8a0b0'],
            startVelocity: 55,
            gravity: 0.8,
        });
        // Right popper
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { x: 0.9, y: 0.8 },
            colors: ['#A3B5A4', '#ffffff', '#1A253E', '#f0d080', '#e8a0b0'],
            startVelocity: 55,
            gravity: 0.8,
        });
        // Center burst
        confetti({
            particleCount: 80,
            spread: 120,
            origin: { x: 0.5, y: 0.6 },
            colors: ['#ffffff', '#A3B5A4', '#f0d080'],
            startVelocity: 40,
            gravity: 0.9,
        });
    };

    const handleEnter = () => {
        if (value.trim().toLowerCase() === 'veloura') {
            setCelebrating(true);
            fireConfetti();
            // Keep firing for 2.5s
            intervalRef.current = setInterval(fireConfetti, 700);
            setTimeout(() => {
                clearInterval(intervalRef.current);
                onUnlock();
            }, 2800);
        } else {
            setError(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleEnter();
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className={`gate-page${celebrating ? ' gate-page--celebrating' : ''}`}>
            <div className="gate-content">
                <div className="gate-logo">
                    <span className="gate-logo-dot"></span>
                    <span className="gate-logo-dot"></span>
                    <span className="gate-logo-dot"></span>
                </div>

                {celebrating ? (
                    <div className="gate-celebrate">
                        <div className="gate-celebrate-emoji">🎉</div>
                        <h1 className="gate-brand gate-brand--white">Welcome to Veloura!</h1>
                        <p className="gate-tagline gate-tagline--bright">Grand Opening — entering your experience…</p>
                    </div>
                ) : (
                    <>
                        <h1 className="gate-brand">Veloura Dental</h1>
                        <p className="gate-tagline">Premium care, beautifully delivered.</p>
                        <div className="gate-form">
                            <input
                                type="text"
                                className={`gate-input${error ? ' gate-input--error' : ''}`}
                                placeholder="Enter access name..."
                                value={value}
                                onChange={e => { setValue(e.target.value); setError(false); }}
                                onKeyDown={handleKeyDown}
                                autoFocus
                            />
                            <button className="gate-btn" onClick={handleEnter}>
                                🎊 Inaugurate
                            </button>
                            {error && <p className="gate-error">Incorrect name. Please try again.</p>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default GatePage;
