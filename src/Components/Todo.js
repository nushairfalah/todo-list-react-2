import React, { useRef } from 'react';
import '../App.css'
import useDoubleClick from 'use-double-click';

const Todo = ({ onDouble, obj, removeTodos }) => {

    // console.log(obj, 'this object')
    const buttonRef = useRef()

    useDoubleClick({
        onDoubleClick: () => {
            const doubleClick = window.confirm("You are using double click ?")
            if (doubleClick) {
                onDouble(obj)
            }
        },
        ref: buttonRef
    })



    // return <p ref={buttonRef}>{obj.text}</p>
    return (
        <section>
            <li ref={buttonRef} className="todo-list">
                {obj.text}
            </li>
            <button className="btn-todo" onClick={removeTodos}>X</button>
        </section>
    )
}

export default Todo;
