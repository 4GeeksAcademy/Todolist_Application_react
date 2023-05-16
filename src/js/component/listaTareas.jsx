// import React, { useState } from 'react';

// const ListaTareas = ({primertarea,setPrimert}) => {
//   const [tarea, setTarea] = useState('');
//    const handleSubmit = (e) =>{
//     e.preventDefault();
//     const numerotareas = (e)+1;
//     console.log(numerotareas)
   
//   const generarId = ()=>{
//     const random = Math.random().toString(36).substr(2);
//       const fecha = Date.now().toString(36);
//       return random + fecha

//    }

//     const TodasTareas = {tarea, id:generarId()}
    
//        setPrimert(TodasTareas)
//       setPrimert([... primertarea,TodasTareas ])
//       setTarea('')

//    }

  

//   return (
//     <form onSubmit={handleSubmit}>
       
//       <div className="text-center">
//       <h1> Mis Tareas </h1>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput"
//             placeholder="Ingresa una Tarea"
//             value={tarea}
//             onChange={(e) => setTarea(e.target.value)}
//           />
//         </div>
//       </div>
//      <span> numero de tareas </span>
//     </form>
//   );
// };

// export default ListaTareas;

import React, { useState } from 'react';

const ListaTareas = ({ primertarea, setPrimert}) => {
  const [tarea, setTarea] = useState('');
  //const [contadorTareas, setContadorTareas] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);
      return random + fecha;
    };

    const TodasTareas = { tarea, id: generarId() };

    setPrimert(TodasTareas);
    setPrimert([...primertarea, TodasTareas]);
    setTarea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <h1 className='titulo'> Mis Tareas </h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control tareauno"
            id="formGroupExampleInput"
            placeholder="Ingresa una Tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          
        </div>
       
      </div>
    </form>
  );
};

export default ListaTareas;



