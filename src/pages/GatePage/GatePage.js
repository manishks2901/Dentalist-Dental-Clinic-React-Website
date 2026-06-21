import React, { useState } from 'react';
import './GatePage.scss';

const GatePage = ({ onUnlock }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleEnter = () => {
        if (value.trim().toLowerCase() === 'veloura') {
            onUnlock();
        } else {
            setError(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleEnter();
    };

    return (
        <div className="gate-page">
            <div className="gate-content">
                <div className="gate-logo">
                    <span className="gate-logo-dot"></span>
                    <span className="gate-logo-dot"></span>
                    <span className="gate-logo-dot"></span>
                </div>
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
                        Enter Site
                    </button>
                    {error && <p className="gate-error">Incorrect name. Please try again.</p>}
                </div>
            </div>
        </div>
    );
};

export default GatePage;
