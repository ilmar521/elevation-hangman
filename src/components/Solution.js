import Letter from "./Letter";

function Solution({solution, letterStatus}) {

    return (
        <div>
            {solution.word.split('').map(letter => (<Letter letter={letterStatus[letter] ? letter : '_ '}/>))}
            <div>
                <em>{solution.hint}</em>
            </div>
        </div>
    )
}

export default Solution;
