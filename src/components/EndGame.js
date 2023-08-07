
function Solution({win, secretWord}) {

    return (
        win ?
        <div className="end-game-message">Congratulations!</div> :
        <div className="end-game-message">You lose! Secret word was: {secretWord}</div>
    )
}

export default Solution;
