import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch('/clicked', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message); // Update the state with the server response
            } else {
                console.error('Request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div id="parent-div">
            {message ? (
                <div>{message}</div> // Display message if it exists
            ) : (
                <button onClick={handleClick}>Click Me!</button>
            )}
        </div>
    );
}

export default App;
