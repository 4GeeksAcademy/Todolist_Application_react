import React, {useState , useEffect } from "react";
import ListaTareas from "./listaTareas.jsx";
import TareaNueva from "./tareanueva.jsx";
const Home = () => {
	const[primertarea, setPrimert ] = useState([]);
	const eliminarTarea = (id)=>{
		const tareasactualizadas = primertarea.filter(primertarea => primertarea.id !== id)
		setPrimert(tareasactualizadas)

	}
	return (
		<div className="contenedor">
			
			<ListaTareas
			primertarea={primertarea}
			setPrimert={setPrimert}/>
			<TareaNueva
			primertarea={primertarea}
			eliminarTarea={eliminarTarea}

			/>
		</div>
		
	
	)
}

export default Home;
