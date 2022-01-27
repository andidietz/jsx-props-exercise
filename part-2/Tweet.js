const Tweet = (props) => {
    return (
        <div>
            <p><b>{props.username}</b>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}