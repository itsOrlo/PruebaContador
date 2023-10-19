import "../css/Botones.css";


function Boton({ texto, esBotonDeClick, manejarClick }) {

  return (
    <button
      className={esBotonDeClick ? "botonClick" : "botonReset"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
