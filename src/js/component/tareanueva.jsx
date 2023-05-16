// import React, { useState } from 'react';

// const TareaNueva = ({primertarea}) => {

//     return(
        
//        <>
        
//         {primertarea.map( (tareauno) => {
//             return(

             
//                 <div className="mb-1 d-flex align-items-center">
//                 <input
//                   type="text"
//                   className="form-control fondoinput"
//                   id="formGroupExampleInput"
//                   value={tareauno.tarea}
//                   key={tareauno.id}
//                 />
//                 <button type="button" className="btn-close ml-auto" aria-label="Close"></button>
//               </div>
               
//             )
//         })}
//        </>
//     )
// };

// export default TareaNueva;
import React, { useState } from 'react';

const TareaNueva = ({ primertarea ,eliminarTarea }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const contadorTareas = primertarea.length;

  return (
    <>
      {primertarea.map((tareauno) => {
        return (
          <div
            className="mb-1 d-flex align-items-center"
            key={tareauno.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <input
              type="text"
              className="form-control fondoinput"
              id="formGroupExampleInput"
              value={tareauno.tarea}
              eliminarTarea={eliminarTarea}
            />
            {hover && (
              <button
                type="button"
                className="btn-close ml-auto botoncerrar"
                aria-label="Close"
                onClick={()=> eliminarTarea(tareauno.id)}
              ></button>
            )}
          </div>
        );
      })}
     <span className='item'>{contadorTareas} Items</span>
    </>
  );
};

export default TareaNueva;
