
function Solution() {

    const hideLetters = ['_','_','_','_']

    return (
        <div>
            {hideLetters.map(l => <span> {l} </span>)}
            <div>
                <em>Your ideal mood when coding.</em>
            </div>
        </div>
    )
}

export default Solution;
