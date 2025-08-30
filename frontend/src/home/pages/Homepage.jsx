import React from "react";

export default props =>
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

            <div className="w-1/1 bg-destaque-claro mb-15 mt-7 mr-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 ease">

            </div>
        </div>
    </div>