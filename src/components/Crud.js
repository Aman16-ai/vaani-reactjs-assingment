import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'

export default function Crud() {
    const [todo, setTodo] = useState({
        title: "",
        description: ""
    })

    const [updateTodo,setUpdateTodo] = useState({
        idx: "",
        title: "",
        description: ""
    })

    const [todoList, setTodoList] = useState([])
    const handleOnChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const handleAddBtn = () => {
        setTodoList([...todoList, todo])
        setTodo({
            title: "",
            description: ""
        })
    }

    const handleDeleteTodo = (todoTodelete) => {
        setTodoList(todoList.filter((todo, i) => {
            if (todoTodelete.idx !== i) return true;
        }))
    }

    const handleUpdateTodoModal = (todoToUpdate) => {
        setUpdateTodo(todoToUpdate)
    }
    const handleUpdateOnChange = (e) => {
        setUpdateTodo({...updateTodo,[e.target.name]:[e.target.value]})
    }

    const handleModalBtn = () => {
        let tempTodoList = [...todoList]
        for(let i = 0;i<tempTodoList.length;i++) {
            if(updateTodo.idx === i) {
                tempTodoList[i] = {"title":updateTodo.title,"description" :updateTodo.description}
            }
        }
        setTodoList(tempTodoList)
    }

    return (
        <div className='my-4'>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update todo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" value={updateTodo.title} onChange={handleUpdateOnChange} id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea name="description" className="form-control" value={updateTodo.description} onChange={handleUpdateOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleModalBtn} data-bs-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add-todo-container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" name='title' className="form-control" value={todo.title} onChange={handleOnChange} id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea name="description" className="form-control" value={todo.description} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button onClick={handleAddBtn} className='btn btn-primary'>Add</button>
            </div>
            <div className="todo-lists-container">
                {
                    todoList.map((todo, i) => {
                        return <TodoCard idx={i} todo={todo} handleUpdateTodoModal={handleUpdateTodoModal} handleDeleteTodo={handleDeleteTodo} />
                    })
                }
            </div>

        </div>
    )
}
