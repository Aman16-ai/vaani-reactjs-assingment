import React from 'react'

export default function TodoCard(props) {
    const { idx, todo, handleDeleteTodo,handleUpdateTodoModal } = props

    const handleCardDeleteBtn = () => {
        handleDeleteTodo({ ...todo, "idx": idx })
    }
    const handleCardUpdateBtn = () => {
        handleUpdateTodoModal({...todo,"idx":idx})
    }
    return (
        <>
            <div style={{ display: "inline-grid" }} className='my-4 mx-2'>
                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">
                        <h5 className="card-title">{todo.title}</h5>
                        <p className="card-text">{todo.description}</p>
                        <div style={{ display: "flex" }}>
                            <button onClick={handleCardUpdateBtn} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success mx-2'>Update</button>
                            <button onClick={handleCardDeleteBtn} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
