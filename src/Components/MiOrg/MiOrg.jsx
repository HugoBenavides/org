
import "./MiOrg.css"

const MiOrg = (props) => {

    /*console.log (props)

    const [mostrar,actualizarMostrar] = useState (true)

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", mostrar)
        actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection" >
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.mostrarCambiar} />
    </section>
};

export default MiOrg;