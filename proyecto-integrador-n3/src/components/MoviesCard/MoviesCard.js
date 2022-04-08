import React, {Component} from 'react';


class MoviesCard extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className= 'character-card'>
                <img src={this.props.dataPelicula.poster_path} alt="" />
                <h4>{this.props.dataPelicula.tittle}</h4>
                <p>{`${this.props.dataPersonaje.overview} - ${this.props.dataPersonaje.popularity}`} </p>
                {
                    //<p className='more' onClick={()=>this.props.remove(this.props.dataPelicula.id)}>Borrar</p> /* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */
                }
               
            </div>
        );
    }
}

export default MoviesCard