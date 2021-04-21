
import React, { useState, useEffect } from 'react';

const messages = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => { setMessage('') }, 3000);
        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div>
            {message || null}
            <button onClick={() => setMessage('Clicked!')}>Click Me</button>
        </div>
    );
}

export default messages;
