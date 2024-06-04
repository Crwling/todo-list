import React, { useContext } from "react"
import clsx from "clsx"
import { TaskItem } from "./TaskItem"
import { AppContext } from "./AppContext"

export function ToDoList () {
    const { todos } = useContext(AppContext)
    let someToDoToDo = todos.length

    return (
        <div className={clsx("todo_list", { "todo_list_full": someToDoToDo })}> 
            {todos.length === 0 ? "Займись делом, бездельник!!!" : (
                todos.map(todo => {
                    return (
                        <TaskItem
                            id={todo.id}
                            completed={todo.completed}
                            title={todo.title}
                            key={todo.id}
                        />
                    )
                
                })
            )}
        </div>
    )
}