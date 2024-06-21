import React, { useState, useContext } from "react"
import clsx from "clsx"
import { AppContext } from "./AppContext"

export function ToDoForm () {
    const [newItem, setNewItem] = useState("")

    const { addToDo } = useContext(AppContext)

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        addToDo(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit}>
        <label className="input_label">
          <h1 className={clsx("input_h1", { "input-hasValue": !!newItem })}>Что бы вы хотели сделать?</h1>
          <input className={clsx ("input_field")}
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button>Done!</button>
      </form>
    )
}