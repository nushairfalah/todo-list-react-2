import React from 'react';
import '../App.css'
import Todo from '../Components/Todo';
import TodoForm from '../Components/TodoForm';
import EditTodoForm from '../Components/editForm';

let timeout

class TodoList extends React.Component {
    state = {
        todos: [{ text: 'test1' }, { text: 'test2' }, { text: 'test3' }],
        newValue: '',
        loading: true,
        timeOut: undefined,
        isEdit: false,
        editIndex: {},
        idEdit: {}
    }

    componentDidMount() {
        console.log('test component mount')
        timeout = setTimeout(() => {
            this.setState({
                loading: false,
            });
            console.log('data telah diupdate')
        }, 500)
    }

    addTodo = (event) => {
        const newTodos = this.state.todos.concat({ text: event })
        this.setTodos(newTodos)
        console.log(newTodos)
    };

    setTodos = (event) => this.setState({ todos: event });

    changeHandler = (event) => {
        const todo = event.target.value
        this.setState({
            newValue: todo
        })
    }

    doubleClick = (data, index) => {
        this.setState({
            editIndex: data,
            isEdit: !this.state.isEdit,
            idEdit: index
        })
    }

    editChangeHandler = (event) => {
        this.setState({
            editIndex: {
                ...this.state.editIndex,
                text: event.target.value
            }
        })
        console.log(console.log(this.state.editIndex, 'ind'))
    }

    editSubmit = () => {
        const newData = this.state.todos.map((val, index) => {
            console.log(val, 'val')
            if (index === this.state.idEdit) {
                return this.state.editIndex
            }

            return val
        })
        this.setState({
            todos: newData,
            newValue: '',
            isEdit: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.newValue) return;
        this.addTodo(this.state.newValue);
        this.setState({
            newValue: ''
        })
    }

    removeTodo = (event) => {
        console.log(event)
        const confirm = window.confirm("You want to remove this list ?")
        // remove 2 list
        const remove = this.state.todos.splice(event, 2)
        if (confirm) {
            this.setState({ remove })
        }
    }

    clearAll = () => {
        this.setState({
            todos: [],
            newValue: '',
            timeOut: undefined,
            isEdit: false,
            editIndex: {},
            idEdit: {}
        })
    }


    render() {
        if (this.state.loading) {
            return <div className='App'>Processing...</div>
        }
        return (
            <div>

                {
                    this.state.isEdit ? <EditTodoForm
                        onSubmit={this.editSubmit}
                        onValue={this.state.editIndex.text}
                        editChange={this.editChangeHandler}
                    /> :
                        <TodoForm
                            onSubmit={this.handleSubmit}
                            onValueChange={this.changeHandler}
                            onValue={this.state.newValue}
                            onClick={this.handleSubmit}
                        />
                }

                {
                    this.state.todos.map((todo, index) => (
                        <div className='hover' key={index}>
                            <Todo
                                onDouble={(data) => this.doubleClick(data, index)}
                                obj={todo}
                                removeTodos={() => this.removeTodo(index)} />
                        </div>
                    ))
                }
                <button className='btn btn-clear' onClick={this.clearAll}>Clear All</button>

            </div >
        )
    }
}

export default TodoList;
