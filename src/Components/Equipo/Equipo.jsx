import "./Equipo.css"

import Colaborador from "../Colaborador/Colaborador.jsx"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return <> 
        {colaboradores.length > 0 && // se crea una condicion en donde si el length del array del colaboradores es mayor a 0 entonces solo se va a mostrar la section que contegan datos de titulo 
                <section className="equipo" style={ {backgroundColor: colorSecundario} }>
                    <input 
                    className="input-color" 
                    type="color"
                    value={colorPrimario}
                    onChange={(e) =>{
                        actualizarColor(e.target.value, id)
                    }}
                    />
                    <h3 style={{borderColor: colorPrimario}} >{titulo}</h3>
                    <div className="colaboradores">
                    {
                        colaboradores.map ( (colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario} 
                        eliminarColaborador={eliminarColaborador} 
                        like={like} />)
                    }

                    </div>
                </section>
        }
    </>
}

export default Equipo