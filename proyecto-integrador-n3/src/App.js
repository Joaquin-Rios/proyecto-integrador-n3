import './App.css';

import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
     <div>
       <Header/>
     </div>

      <main> 
      <Movies/>
      </main>

      
      <Footer/>
      

    </div>
  );
}

export default App;
