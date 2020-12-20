import React from 'react';
import '../App.css'
import TodoList from './TodoList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {

    state = {
        showTodoList: false,
    }

    toggleButton = (event) => {
        // console.log(event)
        event.preventDefault();
        this.setState({
            showTodoList: !this.state.showTodoList
        })
    }


    render() {
        return (
            <>
                <Router>
                    <h1 className='header-h1' onClick={this.toggleButton}>
                        {this.state.showTodoList ? <Link to='/' className='link'>&lt;Back</Link> : <Link to='/todo-list' className='link'>&gt;Go to Todo List</Link>}
                    </h1>

                    <Route path='/todo-list'><TodoList /></Route>
                </Router>
            </>
        )
    }
}

export default Header;
