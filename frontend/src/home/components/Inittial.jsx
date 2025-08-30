import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function WelcomeScreen() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="w-screen bg-fundo flex justify-center items-center h-screen flex-col transition-all duration-500 ease-in-out">
            <div className="welcome flex flex-col justify-center items-center">
                <h1
                    data-aos="fade"
                    data-aos-duration="2000"
                    data-aos-delay="0"
                    className="text-8xl text-principal font-principal"
                >
                    Olá!
                </h1>
                <p
                    className="text-center text-principal font-principal w-150 py-2 mt-3"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                >
                    Vamos organizar o seu dia.
                </p>
                <p
                    className="text-center text-principal font-principal w-150 py-2"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                    data-aos-delay="1300"
                >
                    Adicione sua primeira tarefa e comece a riscar os itens da sua lista.
                </p>
                <p
                    className="text-center text-principal font-principal w-150 py-2"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                    data-aos-delay="2000"
                >
                    A produtividade começa aqui!
                </p>
                <div className="wraper"
                    data-aos="fade-in"
                    data-aos-duration="3000"
                    data-aos-delay="3000">
                    <button
                        className="w-70 h-15 my-5 bg-principal destaque-claro rounded-4xl font-principal text-fundo hover:scale-110 cursor-pointer transition-all duration-800 ease text-2xl"

                    >
                        Começar
                    </button>
                </div>
            </div>
        </div>
    )
}


export default WelcomeScreen