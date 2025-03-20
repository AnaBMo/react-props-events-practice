import Card from './Card';

function Cards({ genero }) {

  return (
    <>
      <h2>Genero: { genero && genero.length > 0 ? genero[0].genero : "Desconocido" }</h2>
      <ul className="cards">
        {genero.map((pelicula) => (
          <Card key={pelicula.titulo} {...pelicula} />
        ))}
      </ul>
    </>
  );
}

export default Cards;