import './App.css';
import peliculas from './data/peliculas';
import Cards from './components/Cards'
import Events from './components/Events';

const filterPelis = (genero) => {
  return peliculas.filter((pelicula) => pelicula.genero === genero)
}

function App() {
  return (
    <>
      <div>
        <Events />
      </div>
      <div>
        <Cards genero={ filterPelis('Comedia') }/>
        <Cards genero={ filterPelis('Acción') }/>
        <Cards genero={ filterPelis('Terror') }/>
      </div>
    </>
  );
}

export default App;