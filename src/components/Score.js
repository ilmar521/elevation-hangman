
function Score({score}) {

    let classScore = 'high-score'
    if (score >= 50 && score <= 80) {
        classScore = 'medium-score'
    } else if (score < 50) {
        classScore = 'low-score'     
    }

    return (
        <div className={classScore}>{score}</div>
    )
}

export default Score;
