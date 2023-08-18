import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from"react-icons/ai"

const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo, id, fav} = props.datos //manda a llamar las props del objeto de datos

    const {colorPrimario, eliminarColaborador, like} = props //mandamos a llamar a las props de estos dos objetos
    //se crea una arrow function dentro de onClick para que solo se ejecute la funcion cuando se hagas click 
    return <div  className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id) } />
        <div className="encabezado" style={ {backgroundColor:colorPrimario} } >
            <img src={foto} alt={nombre} />
        </div>
        <div className="info" >
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />
            }
        </div>
    </div>
}

export default Colaborador