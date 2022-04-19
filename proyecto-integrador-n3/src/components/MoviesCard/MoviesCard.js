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
            console.log(this.state.order),

            <div className ={this.props.order === true ? 'tarjetasRow' : 'tarjetasColumn'}>

                <img src={`https://image.tmdb.org/t/p/original${this.props.dataPelicula.poster_path}`} alt="" />
                <section>
                    <h2>{this.props.dataPelicula.title}</h2>
                    <h4>{`Release date: ${this.props.dataPelicula.release_date}     Popularity:${this.props.dataPelicula.vote_average}`}</h4>
                    {
                    this.state.oculto ?
                        <button className='botonTarjeta' onClick={()=> this.verMas()}>Details</button>
                    :
                        <>
                        <p>{this.props.dataPelicula.overview} </p>
                        <button className='botonTarjeta' onClick={()=> this.verMas()}>Close details</button>
                        </>
                    }
            
                    
                    <button className='botonTarjeta' onClick={()=>this.props.delete(this.props.dataPelicula.id)}>Remove film</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}
                </section>
               

            </div>
        );
    }
}

export default MoviesCard;