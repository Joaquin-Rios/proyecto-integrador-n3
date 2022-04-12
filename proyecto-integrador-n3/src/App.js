import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Buscador from './components/Buscador/Buscador';

function App() {
  return (
    <div className="App">
      <div> 
      <Header/>
      </div>

      <div className='Movies'> 
      <Movies/>
      </div>

      <div> 
      <Footer/>
      </div>

    </div>
  );
}

export default App;
