// llamamos react
import React, {Component} from 'react' 
//Generar un componente
export default class Counter extends Component {
    constructor() { //Constructor hace tres cosas: 1.llamo al constructor de mi padre 2. Seteo mi state inicial y 3. handleo los states de la UI
        super()
        //aca vamos a definir nuestro objeto state.
        this.state = { //todo lo que queramos mostrar en la interfaz, se guarda en el state.
            valorFarenheit:0,
            valorCelsius:0,
        }

        //this se refiere a la funcion, y no al componente. Tengo que pasarlo a componente con bind
        this.handleCelsiusTextChange=
        this.handleCelsiusTextChange.bind(this)

        this.handleFahrenheitTextChange=
        this.handleFahrenheitTextChange.bind(this)

    }
    handleCelsiusTextChange(e){
        console.log(e.target.value) // me traigo el valor de e
        const valCel = e.target.value // definimos el valor de celcius
        const valFah = (valCel * 9 / 5) + 32
        // para setear valores en state:
        this.setState({
            valorCelsius:valCel,
            valorFahrenheit:valFah
        })

    }
    handleFahrenheitTextChange(e){
        console.log(e.target.value) // me traigo el valor de e
        const valFah = e.target.value // definimos el valor de celcius
        const valCel = (valFah -32) * 5/9
        // para setear valores en state:
        this.setState({
            valorCelsius:valCel,
            valorFahrenheit:valFah
        })
    }



    render(){
        const{valorFahrenheit,valorCelsius} = this.state //traigo de state los valores que están en llavecitas.
        return(
            <div>
                <span> Valor celsius </span>
                <input type='number' value={valorCelsius} onChange={this.handleCelsiusTextChange} /> // al evento on change
                <br/>
                <span> Valor Fahrenheit </span>
                <input type='number' value={valorFahrenheit} onChange={this.handleFahrenheitTextChange}/>
           </div>
        )
    }
}


