import React, { useState } from "react";

export default (props) => {
    const [tasks, setTasks] = useState([])

    const [inputValue, setInputValue] = useState("")

    const addTask = () => {
        if (inputValue.trim() === "") {
            return
        }

        const newTask = {
            id: Date.now(),
            text: inputValue,
        }

        setTasks([...tasks, newTask])
        setInputValue("")
    }

    const removeTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
    }


    return (
        <div className="container-homepage flex w-screen h-screen flex-col transition-all duration-150 ease-in-out">
            <div className="header bg-destaque-claro h-1/15 mt-5 mx-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease">

            </div>

            <div className="wrather-homepage flex w-screen h-screen">
                <div className="nav-container w-1/5 mb-15 mt-7 mx-5 rounded-2xl bg-destaque-claro shadow-md hover:shadow-lg transition-all duration-150 ease">
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
                </div>
                <div className="w-1/1 bg-destaque-claro mb-15 mt-7 mr-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease p-5">
                    <h2 className="text-2xl font-bold mb-4">Minha Lista de Tarefas</h2>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            className="flex-grow p-2 rounded-l-md"
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
                    <ul className="list-none p-0">
                        {/* Mapeia o array de tarefas para renderizar cada item na tela. */}
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className="flex items-center justify-between bg-white p-3 mb-2 rounded-md shadow-sm"
                            >
                                <span>{task.text}</span>
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