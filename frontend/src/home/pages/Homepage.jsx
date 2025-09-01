import React, { useState, useEffect } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

export default (props) => {
    const [tasks, setTasks] = useState([])

    const [inputValue, setInputValue] = useState("")

    const [subValue, setSubValue] = useState("")

    const API_URL = "http://localhost:3000/tasks"

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setTasks(data)
            })
            .catch((error) => console.error("Erro ao carregar as tarefas:", error))
    }, [])

    const addTask = () => {
        if (subValue.trim() === "") {
            return
        }

        const newTask = {
            id: Date.now(),
            subject: subValue,
            text: inputValue,
            completed: false,
            important: false,
        }

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then((response) => response.json())
            .then((data) => {
                setTasks([...tasks, data])
                setInputValue("")
                setSubValue("")
            })
            .catch((error) => console.error("Erro ao adicionar a tarefa:", error))
    }

    const toggleImportant = (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id)
        const updatedTask = { ...taskToUpdate, important: !taskToUpdate.important }

        fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask)
        })
            .then(() => {
                setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
            })
            .catch((error) => console.error("Erro ao atualizar a tarefa:", error))
    }

    const toggleComplete = (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id)
        const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed }

        fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then(() => {
                setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
            })
            .catch((error) => console.error("Erro ao atualizar a tarefa:", error))
    }

    const removeTask = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setTasks(tasks.filter((task) => task.id !== id))
            })
            .catch((error) => console.error("Erro ao remover a tarefa:", error))
    }


    return (
        <div className="container-homepage flex w-screen h-screen flex-col transition-all duration-150 ease-in-out">
            <div className="header bg-destaque-claro h-1/15 mt-5 mx-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease">

            </div>

            <div className="wrather-homepage flex w-screen h-screen">
                <div className="nav-container w-1/5 mb-15 mt-7 mx-5 rounded-2xl bg-destaque-claro shadow-md hover:shadow-lg transition-all duration-150 ease grid">
                    <nav className="m-5 flex flex-col text-texto-principal font-principal">
                        <p className="mt-2 text-texto-secundario text-sm  p-1 border-b">Atalhos</p>

                        <a href="#" className="mt-2 hover:bg-principal hover:text-texto-secao p-2 rounded-sm text-xs transition-all duration-200 ease-in-out">Pagina inicial</a>

                        <a href="#" className="mt-2 hover:bg-principal hover:text-texto-secao p-2 rounded-sm text-xs transition-all duration-200 ease-in-out">Meu trabalho</a>

                        <a href="#" className="mt-2 hover:bg-principal hover:text-texto-secao p-2 rounded-sm text-xs transition-all duration-200 ease-in-out">Configurações</a>


                        <p className="mt-2 text-texto-secundario text-sm  p-1 border-b">Favoritos</p>
                        {/* Accordion */}
                        <p className="mt-2 text-texto-secundario text-sm  p-1 border-b">Area de trabalho</p>
                        {/* Backend */}
                    </nav>

                    <button className="icon self-end justify-self-end  w-10 h-10 rounded-full grid items-center justify-center m-2">
                        <IoAddCircleSharp className=" text-2xl scale-150 text-principal cursor-pointer hover:rotate-360 hover:scale-180 transition-all duration-600 ease-in-out"/>
                    </button>
                </div>

                <div className="w-1/1 bg-destaque-claro mb-15 mt-7 mr-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease p-5">
                    <h2 className="text-2xl font-bold mb-4">Minha Lista de Tarefas</h2>

                    <div className="flex mb-4">

                        <input
                            className="flex-grow p-2 rounded-l-md"
                            type="text"
                            placeholder="Adicionar nova tarefa..."

                            value={subValue}
                            onChange={(e) => setSubValue(e.target.value)}

                            onKeyDown={(e) => e.key === "Enter" && addTask()}

                        />

                        <input
                            className="flex-grow p-2 rounded-l-md"
                            type="text"
                            placeholder="Adicionar nova tarefa..."

                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                            onKeyDown={(e) => e.key === "Enter" && addTask()}
                        />

                        <button
                            className="p-2 bg-principal text-white rounded-r-md hover:bg-opacity-80 transition-colors"
                            onClick={addTask}
                        >

                            Adicionar

                        </button>

                    </div>

                    <ul className="list-none p-0 w-full flex flex-wrap gap-2">

                        {tasks.map((task) => (

                            <li
                                key={task.id}
                                className={`w-[calc(50%-0.5rem)] justify-between bg-white p-2 rounded-md shadow-sm ${task.important ? 'bg-yellow-200 border-l-4 border-yellow-500' : ''}`}

                            >

                                <span

                                    style={{ textDecoration: task.completed ? "line-through" : "none" }}

                                    onClick={() => toggleComplete(task.id)}

                                    className="cursor-pointer min-w-0 break-all">

                                    <strong>{task.subject}</strong>
                                    <br />
                                    {task.text}

                                    <button
                                        className={`text-2xl m-5 transition-transform duration-200 ${task.important ? 'text-yellow-500 transform scale-125' : 'text-gray-400'
                                            }`}
                                        onClick={() => toggleImportant(task.id)}
                                    >
                                        ★
                                    </button>
                                    
                                </span>

                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeTask(task.id)}
                                >

                                    Remover

                                </button>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="w-1/1 bg-destaque-claro mb-15 mt-7 mr-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease">

            </div>
        </div>

    )
}