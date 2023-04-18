// import { useState } from 'react';
import './MiOrg.css';

const MiOrg = (props) => {

    //const [nombreVariable, funcionActualiza] = useState (valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar);
    // }

    return (
        <div className="mi-org">
            <h3 className='title'>Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/> 
        </div>
    )
}

export default MiOrg;