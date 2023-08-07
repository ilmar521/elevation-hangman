
function Letter({letter, selected, changeStatus}) {

    const handleClick = () => {
        changeStatus(letter);
    }

    return (
        <span className={selected ? 'selected' : null} onClick={selected ? null : handleClick}>{letter}</span>
    )
}

export default Letter;