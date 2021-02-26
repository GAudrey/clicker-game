import React from "react";

class SighDuck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render(){
        return (
            <section>
                <img src="https://cdn.discordapp.com/attachments/786550523733606420/814505432223580230/sgn_duck_300.png" onClick={this.clicked}/>
                <p>{this.state.clicks} Sigh-Duck</p>
                <p>0 Sigh-Duck / sec.</p>
            </section>
        )
    }
}

export default SighDuck;
