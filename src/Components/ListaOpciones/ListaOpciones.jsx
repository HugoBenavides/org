import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log("Manejar cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="equipos">
        <label>Equipo</label>
        <select className="equipos__select" value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden>--Seleccionar Equipo--</option>
            { props.equipos.map( (equipos, index) => <option key={index} value={equipos}>{equipos}</option>) }
        </select>
    </div>

};

export default ListaOpciones;