import React, {Component} from 'react';
import './MoviesCard.css';


class MoviesCard extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className= 'movie-card'>
                <img src={`https://image.tmdb.org/t/p/original${this.props.dataPelicula.poster_path}`} alt="" />
                <h4>{this.props.dataPelicula.title}</h4>
                <p>{`${this.props.dataPelicula.overview} - ${this.props.dataPelicula.popularity}`} </p>
                <button className='more' onClick={()=>this.props.delete(this.props.dataPelicula.id)}>Eliminar</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}

            </div>
        );
    }
}

export default MoviesCard;