import React from "react";
import Hijo from "../Hijo"

class Padre extends React.Component{

    state = {
        count:0,
    }

    sum=()=> {
        this.setState(prevState => {
            return {
             count: prevState.count+1   
            }
        })
    }
    rest=()=> {
        this.setState(prevState => {
            return {
             count: prevState.count-1   
            }
        })
    }

    render(){
        return(
            <div>
                <Hijo count={this.state.count} suma={this.sum} resta={this.rest}/>
            </div>
        )
    }

}

export default Padre;