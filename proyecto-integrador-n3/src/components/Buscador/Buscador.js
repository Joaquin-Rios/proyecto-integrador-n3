import react, {Component} from 'react'

class Buscador extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    evitarSubmit(event){
        event.preventDefailt()
    }
    controlarCambios(event){
        this.setState({valor: event.target.value})
    }

    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <label>Name:</label>
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}
export default Buscador