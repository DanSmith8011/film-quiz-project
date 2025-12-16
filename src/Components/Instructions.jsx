

function Instructions ({ onStart }) {
    return ( 
        <div className = "instructions" >
            <h1>Welcome to the Film Quiz</h1>
            <p>Test your knowledge about films with this fun quiz. Click the button below to start!</p>
            <button onClick={onStart}>Start Quiz</button>
        </div>

    )
}

export default instructions;