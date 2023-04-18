import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
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
    fav: false
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
  }]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278", 
      colorSecundario:"#D9F7E9"
  },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
  },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
  },  
    { 
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
  },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
  },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#E06B69",
      colorSecundario:"#FFF5D9"
  },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
  }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador 
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator (-...- copia los valores atuales del arreglo y le agregamos nuevo operador)
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaborares = colaboradores.filter((colaborador) => colaborador.id !== id); 
      setColaboradores(nuevosColaborares)
  }

  //Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar Color", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //tildar favorito 
  const like = (id) => {
    const colaboradoresactualizados = colaboradores.map((colaborador) => {
        if(colaborador.id === id) {
          colaborador.fav = !colaborador.fav
        }
        return colaborador
    })
    setColaboradores(colaboradoresactualizados)
  }

  //ternario --> condicion ? seMuestra : noSeMuestra
  // mostrarFormulario ? <Formulario/> : <></>
  //condicion && seMuestra 
  return (
    <div>
      <Header />
      
      { 
      /* mostrar condicional formulario  */
      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo}/> 
      }

      <MiOrg  cambiarMostrar = {cambiarMostrar}/>

      {
        /* mostrar condicional equipo  */
      equipos.map((equipo,index) => <Equipo 
      key={equipo.titulo} 
      datos={equipo} 
      colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador = {eliminarColaborador}
      actualizarColor = {actualizarColor}
      like = {like}
      /> )
      }

      <Footer />

    </div>
  );
}

export default App;
