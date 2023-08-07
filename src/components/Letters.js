import Letter from "./Letter";

function Letters({letterStatus, changeStatus}) {

    return (
        <div>
            <div>Available Letters</div>
            {Object.keys(letterStatus).map(letter => (<Letter letter={letter} selected={letterStatus[letter]} changeStatus={changeStatus}/>))}
        </div>
    )
}

export default Letters;
