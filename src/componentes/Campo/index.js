import './Campo.css';

const Campo = (props)=> {
    const {titulo, required, valor, type = "text" }=props;

    const placeholdermodificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return (
    <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input 
        placeholder={placeholdermodificado} 
        required={required} 
        value={valor}
        onChange={manejarCambio}
        type= {type}/>
    </div>
    )
}

export default Campo