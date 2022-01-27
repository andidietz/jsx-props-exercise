const Person = (props) => {
    const votingStatus = (props.age > 18) ? "Please go vote!" : "you must be 18"
    const name = (props.name.length > 8) ? props.name.slice(0, 7) : props.name

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{votingStatus}</h3>
            <p><b>Name:</b>{name}</p>
            <p><b>Age:</b>{props.age}</p>
            <p>
                <ul>
                    <b>Hobbies:</b>
                    {props.hobbies.map( hobby => <li>{ hobby }</li>)}
                </ul>
            </p>
        </div>
    )
}