import React, {Component} from 'react';
import './MoviesCard.css';


class MoviesCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            oculto: true,

        }
    }

    verMas(){
        this.setState(
            {
                oculto: !this.state.oculto,
            }
        )

    }

    render(){
        return (
            <div className ="tarjetas">
                <img src={`https://image.tmdb.org/t/p/original${this.props.dataPelicula.poster_path}`} alt="" />
                <h4>{this.props.dataPelicula.title}</h4>
                {
                this.state.oculto ?
                    <button className='botonTarjeta' onClick={()=> this.verMas()}>Ver mas</button>
                :
                    <>
                    <p>{`${this.props.dataPelicula.overview} - ${this.props.dataPelicula.popularity}`} </p>
                    <button className='botonTarjeta' onClick={()=> this.verMas()}>Ver menos</button>
                    </>
                }
        
                
                <button className='botonTarjeta' onClick={()=>this.props.delete(this.props.dataPelicula.id)}>Eliminar</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}

            </div>
        );
    }
}

export default MoviesCard;