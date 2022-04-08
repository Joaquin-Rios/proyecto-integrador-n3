import React, {Component} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            peliculas:[],
            nexturl:'',  //Para tener la página siguiente.
            pelisBackup: [],
            filterBy: '',
        }
    }
    componentDidMount(){
        console.log("Me monté");
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    isLoaded: true,
                    peliculas: data.results,
                    pelisBackup: data.results,
                    nextUrl: data.info.next, //Para tener la página siguiente.
                })
            })
            .catch( function (e){
                console.log(e);
            })

    }
    render(){
        return(
            <React.Fragment>
                <div className="row card-filter">
                    {/* Aquí colocá un componente con un formulario que permita filtrar las tarjetas en base a los que escriba el usuario */}
                </div>                
                <div className="row card-container">                
                    { 
                        this.state.isLoaded === false ?
                        <p>Cargando...</p> 
                        :
                        this.state.peliculas.map((pelicula, idx)=><MoviesCard key={pelicula.title + idx} dataPelicula={peliculas} />) 
                        //La arrow function, para borrar, necesita saber a quién borrar por eso debemos pasar los parámetros.
                    }
                </div>

                {
                //<button onClick={()=>this.addMore()}> Más personajes</button>
                }
               
            </React.Fragment>
        )
        //Opcional hacer un if tradicional que retorne <p>Cargando...</p> y el else retrona la estrucurta tradicional retrun(....)
    }

            
    



}

export default Movies