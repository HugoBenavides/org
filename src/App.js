import { useState } from 'react';
import { v4 as uuid} from 'uuid'
import './App.css';
import Header from './Components/Header/Header.jsx';
import Form from './Components/Form/Form.jsx';
import MiOrg from './Components/MiOrg/MiOrg.jsx';
import Equipo from './Components/Equipo/Equipo.jsx';
import Footer from './Components/Footer/Footer.jsx';



function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false)


  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]) // se crea una array vacio para que pueda recibir los datos de formulario

  const [equipos,actualizarEquipos] = useState ([{ //tengo un array de objetos dentro de un hook
    id: uuid(),
    titulo: "Programación",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  },])

  const like = (id) => {

    console.log ("like", id)
    const actualizarLike = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )

    actualizarColaboradores(actualizarLike)

  } 


 /**
  * The function `mostrarCambiar` toggles the value of `mostrarFormulario`.
  */
  const mostrarCambiar = () => {
    actualizarMostrar (!mostrarFormulario)
  }

  //registar colaborador

 /**
  * The function `registrarColaborador` takes a `colaborador` object as input and adds it to the
  * `colaboradores` array.
  * @param colaborador - The parameter "colaborador" represents the data of a new collaborator that
  * will be added to the existing list of collaborators.
  */
  const registrarColaborador = (colaborador) =>{ //se crea "colaborador" para ingresar datos a una copia hecha con un spread operator de "...colaboradores"

    console.log("Nuevo Colaborador", colaborador)
    // Spread Operator sirve para crear una copia de los datos actales y enviarlos a un array vacio
    actualizarColaboradores([...colaboradores, colaborador]) // se crea copia de colaboradores y se le agregan los datos de colaborador
  }


  //Eliminar Colaborador

 /**
  * The function "eliminarColaborador" removes a collaborator from a list of collaborators based on
  * their ID.
  * @param id - The `id` parameter represents the unique identifier of the collaborator that needs to
  * be deleted.
  */
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)

    /* The code is filtering out the collaborator with the specified ID from the `colaboradores` array
    and storing the filtered array in a new variable called `nuevosColaboradores`. Then, it updates
    the state of `colaboradores` with the new filtered array using the `actualizarColaboradores`
    function. Essentially, it is removing the collaborator with the specified ID from the list of
    collaborators. */
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {

    console.log("Actualizar: ", color, id)

    const equiposActualizados = equipos.map( (equipos) => {
      if(equipos.id === id){
        equipos.colorPrimario = color
      }
      return equipos
    } )
    
    actualizarEquipos(equiposActualizados)

  }

  //Crear Equipo

  const crearEquipo = (nuevoEquipo) => { // se enlaza con Equipo.JSX en manejarNuevoEquipo y que manda un objeto 
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid ()} ])
    
  }


  return (
    <div> 
      <Header/>
      { mostrarFormulario ? <Form equipos={equipos.map( (equipos)=> equipos.titulo )} 
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
      /> : <></> }
      <MiOrg mostrarCambiar = {mostrarCambiar} />
      {
        equipos.map( (equipos) => <Equipo datos={equipos} key={equipos.titulo}
        colaboradores={colaboradores.filter( (colaborador => colaborador.equipo === equipos.titulo) )} 
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor} 
        like={like}/>) // Esta linea de codigo es complicada ya que primero se crea una prop de "colaboradores={colaboradores}" para posteriormente agrar una propiedad de filter y mostrar cada unas de las tarjetas en su respectiva seccion
      }
      <Footer />

    </div>
  );
}

export default App;
