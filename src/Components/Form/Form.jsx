import { useState } from "react";
import "./Form.css"
import "../Campo/Campo.jsx"
import Campo from "../Campo/Campo.jsx";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton.jsx";


const Form = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    // se unsa una deestructuracion para simplificar el uso de props

    const {registrarColaborador, crearEquipo} = props

    const manejarEvento = (e)=>{ // e significa evento. 
        e.preventDefault()
        console.log(manejarEvento)

        let dastosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }

        registrarColaborador(dastosAEnviar) // usamos una simplificacion previa de props
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEvento}>
            <h2>Rellana el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese nombre completo" 
                required 
                valor={nombre}
                actualizarValor={actualizarNombre} 
                />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingrese puesto" 
            valor={puesto} 
            actualizarValor={actualizarPuesto} 
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingrese URL de foto" 
            valor={foto} 
            actualizarValor={actualizarFoto} 
            />
            <ListaOpciones
            titulo="equipo"
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellana el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese titulo" 
                required 
                valor={titulo}
                actualizarValor={actualizarTitulo} 
                />
            <Campo
            className="campo-color"  
            titulo="Color" 
            placeholder="Ingrese color en HEXADECIMAL" 
            valor={color} 
            actualizarValor={actualizarColor} 
            type="color"
            />
            <Boton>Registar equipo</Boton>
        </form>


        {/*<form className="form">
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <label htmlFor="nombre">Nombre</label>
        <input className="nombre" name="nombre" type="text" placeholder="Ingresar nombre" />
        <label htmlFor="puesto">Puesto</label>
        <input className="puesto" name="puesto" type="text" placeholder="Ingresar puesto" />
        <label htmlFor="foto">Foto</label>
        <input className="foto" name="foto" type="text" placeholder="ingresar enlace de foto"/>
        <label htmlFor="equipo">Selecciona tu equipo</label>
        <select className="equipo__select" name="equipo__select">
            <option value="" disabled selected>Seleccione una opción</option>
            <option value="frontend">FrontEnd</option>
            <option value="backend">BackEnd</option>
            <option value="dataSciencie">Data Science</option>
            <option value="fullstack">Full Stack</option>
            <option value="desingux">Design/UX</option>
        </select>
        <input className="submit" type="submit" value="Crear" />
        </form>*/}  
    </section>
};

export default Form;