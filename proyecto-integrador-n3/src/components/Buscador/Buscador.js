import react, {Component} from 'react'
import Movies from '../Movies/Movies'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterBy:'',

        }
    }
    evitarSubmit(event){
        event.preventDefailt()
    }
    controlarCambios(event){
        this.setState({filterBy: event.target.value},()=> this.props.filtrarMovies(this.state.filterBy))
        
    }


    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <label>Name:</label>
                <input type="text" onChange={(event)=> this.controlarCambios(event)} value={this.state.filterBy} name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}
export default Buscador