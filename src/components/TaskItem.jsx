import React, { useState, useContext } from "react";
import clsx from "clsx";
import { AppContext } from "./AppContext";

export function TaskItem ({ completed, id, title }) {
    const [isEditMode, setIsEditMode] = useState(false); // isEditMode
    const [newTitle, setNewTitle] = useState(""); // new title

    const { deleteToDo, handleEditTodo } = useContext(AppContext)

    const handleEdit = () => {
        handleEditTodo({ title: newTitle, id })
        setIsEditMode(false)
    }

    const handleCancel = () => {
        setNewTitle(title)
        setIsEditMode(false)
    }

    return (
        <div className={clsx("task-item", { "task-completed": completed })}>
            <div className={clsx("task-text")}>
                {isEditMode ? (
                    <input className="input-edit"
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                ) : title}
            </div>
            <button className="button" onClick={() => handleEditTodo({ id, completed: !completed })}>
                Готово
            </button>
            <button className="button" onClick={() => deleteToDo(id)}>
                Удалить
            </button>
            {isEditMode ? (
                <>
                    <button className="button" onClick={handleEdit}>
                        OK
                    </button>
                    <button className="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </>
            ) : (
                <button className="button" onClick={() => {
                    setIsEditMode(true)
                    setNewTitle(title)
                }}>
                    Редактировать
                </button>
            )}
        </div>
    )
}
    
    