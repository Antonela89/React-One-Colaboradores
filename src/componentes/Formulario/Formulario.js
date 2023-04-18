import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, equipos, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarCrearEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo ="Nombre" 
                    placeholder = "Ingresar nombre" 
                    required 
                    valor = {nombre} 
                    actualizarValor = {setNombre}/>
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor = {puesto} 
                    actualizarValor ={setPuesto}/>
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor ={foto} 
                    actualizarValor = {setFoto}/>
                <ListaOpciones 
                    titulo="Equipo"
                    valor = {equipo}
                    actualizarValor = {setEquipo}
                    equipos={equipos}/>
                <Boton>
                crear
                </Boton>
            </form>

            <form onSubmit={manejarCrearEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo ="Titulo" 
                    placeholder = "Ingresar titulo" 
                    required 
                    valor = {titulo} 
                    actualizarValor = {setTitulo}/>
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar el color en hex" 
                    required 
                    valor = {color} 
                    actualizarValor ={setColor}
                    type="color"/>
                <Boton>
                    Registrar equipo
                </Boton>
                </form>
        </section>
    )
}

export default Formulario;