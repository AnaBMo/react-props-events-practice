function Card(props) {
    return (
      <>
        <li className="card">
          <h3>Titulo: { props.titulo }</h3>
          <h4>Direccion: { props.director }</h4>
        </li>
      </>
    )
  }
  
  export default Card;
  
  
  /*
  // CON DESTRUCTURING PUEDES QUITAR props. 
  
  function Card({ titulo, director }) {
    return (
      <>
        <li className="card">
          <h3>Titulo: { titulo }</h3>
          <h4>Direccion: { director }</h4>
        </li>
      </>
    )
  }
  
  export default Card;
  
  */