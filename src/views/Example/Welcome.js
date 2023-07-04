import React from "react";

class Welcome extends React.Component {

    state = {
        name: "Nam Nghiem",
        channel: "Anime Offical"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return (
            <>
            <div className="first">
                <input value={this.state.name} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}/>
                <br></br>
                <h1>My name is : {this.state.name} </h1>
            </div>
            <div className="last">
                My youtube channel : {this.state.channel}
            </div>
            </>
        );
    }
}

export default Welcome;