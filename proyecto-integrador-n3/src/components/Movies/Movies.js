import React, {Component} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css'
import Buscador from '../Buscador/Buscador';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            peliculas:[],
            //nexturl:[],  //Para tener la página siguiente.
            pelisBackup: [],
            paginaActual: undefined,
            order : true
        }
    }
    

    componentDidMount(){    
        let url =`https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=1`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    peliculas: data.results,
                    pelisBackup: data.results,
                     //Para tener la página siguiente.
                    paginaActual: 1
                }, console.log(this.state))
                
            })
            .catch( function (e){
                console.log(e);
            })
    }

    addMovies(){
        this.setState(
            {
                paginaActual: this.state.paginaActual+1
            },
            ()=>{
                fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3006ac419e664e7a2567a8acf0d5ba5c&language=en-US&page=${this.state.paginaActual}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({              
                        peliculas: this.state.peliculas.concat(data.results),
                         //Para tener la página siguiente.
                    },
                    console.log(this.state.peliculas)
                    )
                    
                    
                })
                .catch( function (e){
                    console.log(e);
                })
            }
        )
    }

    busquedaDePeliculas(entregaMovies){
        let busquedaDePeliculas = this.state.peliculas.filter((element)=>element.title.toLowerCase().includes(entregaMovies.toLowerCase()))
        this.setState({
            peliculas : busquedaDePeliculas
        })
        
    }


    deleteMovie(peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar);
        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    orderMoviesRow(){
        this.setState({
            order : true
        })
    }

    orderMoviesColumn(){
        this.setState({
            order : false
        })
    }


    render(){
        return(
            <React.Fragment>
                <div className='navBar'>
                        {/* Aquí colocá un componente con un formulario que permita filtrar las tarjetas en base a los que escriba el usuario */}
                    {<Buscador filtrarMovies = {(filtrar)=> this.busquedaDePeliculas(filtrar)} />}
                    <section>
                        <i onClick={() => this.orderMoviesRow()} className="fas fa-th"></i>
                        <i onClick={() => this.orderMoviesColumn()} className="fas fa-align-justify"></i>
                    </section> 
                </div> 
                {
                    this.state.order === true ?
                        <article className='MoviesRow'>
                            { 
                                this.state.isLoaded === false ?
                                <p>Cargando...</p> 
                                :
                                this.state.peliculas.map((pelicula, idx)=><MoviesCard  key={pelicula.title + idx} dataPelicula={pelicula} delete={(peliculaABorrar)=>this.deleteMovie(peliculaABorrar)} order = {this.state.order} />) 
                                //La arrow function, para borrar, necesita saber a quién borrar por eso debemos pasar los parámetros.
                            }
                        </article>
                        :
                        <article className='MoviesColumn'>
                            { 
                                this.state.isLoaded === false ?
                                <p>Cargando...</p> 
                                :
                                this.state.peliculas.map((pelicula, idx)=><MoviesCard key={pelicula.title + idx} dataPelicula={pelicula} delete={(peliculaABorrar)=>this.deleteMovie(peliculaABorrar)} order = {this.state.order} />) 
                                //La arrow function, para borrar, necesita saber a quién borrar por eso debemos pasar los parámetros.
                            }
                        </article>
                } 
                <button className='botonVerMas' onClick={()=>this.addMovies()}> Add Films</button>
               
            </React.Fragment>
        )
        
    }

}

export default Movies;