import React from "react";

class Hijo extends React.Component {

    render(){
        return (
            <div>
                <h1>Componente HIJO</h1>
                <h2>El contador esta en: {this.props.count}</h2>
                <button onClick={()=> this.props.suma()}>Sumar</button>
                <button onClick={()=> this.props.resta()}>Restar</button>
            </div>
        )
    }

}

export default Hijo;