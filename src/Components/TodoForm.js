import '../App.css'
const TodoForm = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <form className="form-todo" onSubmit={props.onSubmit}>
                <input type="text" placeholder="type here..."
                    value={props.onValue}
                    onChange={props.onValueChange}
                />
                <button className="btn" onClick={props.onClick}>Add</button>
            </form>
            <br />
            <br />
        </div>
    )
}

export default TodoForm;
