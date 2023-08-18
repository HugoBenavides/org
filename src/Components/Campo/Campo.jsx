import "./Campo.css"


const Campo = (props) =>{


    //Destructuración para el campo texto

    const {type = "text", className} = props

    console.log(type)
   

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //esta funcion actualiza el input de texto 
    }

    const placeHoldeModificado = `${props.placeholder}...`

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input className={className} type={type} placeholder={placeHoldeModificado} required={props.required} valor={props.valor} onChange={manejarCambio} />
    </div>
};

export default Campo;
