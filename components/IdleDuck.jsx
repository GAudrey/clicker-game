import React from "react";

class IdleDuck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: '1', name: 'Wild Rubber Duck', qty: 0, price: 100, idleD: 3},
                {id: '2', name: 'Duck Keychain', qty: 0, price: 200, idleD: 5},
                {id: '3', name: 'Duck Fishing', qty: 0, price: 500, idleD: 10}
            ],
        };
    }

    buyItems = () => {
        this.setState({
            qty: this.state.items[0].qty += 1
        })
    }

    render(){
        return (
            <section>
                <div>
                    <h3>{this.state.items[0].name}</h3>
                    <p>{this.state.items[0].qty} {this.state.items[0].name}</p>
                    <p>Price: {this.state.items[0].price}</p>
                    <p>{this.state.items[0].idleD} Sigh-Duck / sec.</p>
                    <button onClick={this.buyItems}>Buy {this.state.items[0].name}</button>
                </div>
            </section>
        )
    }
}

export default IdleDuck;
