import React from "react";
import sighduck from "../assets/images/sgn_duck_300.png";

class SighDuck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            prod: 0,
            items: [
                {id: 0, name: 'Wild Sigh-Duck', qty: 0, price: 100, idleD: 3},
                {id: 1, name: 'Sigh-Duck Keychain', qty: 0, price: 250, idleD: 5},
                {id: 2, name: 'Sigh-Duck Fishing', qty: 0, price: 500, idleD: 10},
                {id: 3, name: 'Dev Discord Channel', qty: 0, price: 1000, idleD: 25},
                {id: 4, name: 'Leinox\'s Tips', qty: 0, price: 2500, idleD: 50},
                {id: 5, name: 'Sighne\'s Autograph', qty: 0, price: 5000, idleD: 100},
                {id: 6, name: 'Captain Nakou\'s Tweet', qty: 0, price: 10000, idleD: 500},
            ],
        };
    }

    clicked = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    buyItems = (id) => {
        if(this.state.count >= this.state.items[id].price){
            // console.log(this.state.items[id])
            this.setState({
                qty: this.state.items[id].qty += 1,
                count: this.state.count -= this.state.items[id].price,
                prod: this.state.prod += this.state.items[id].idleD,
            })
        }
    }

    autoDuck = setInterval(() => {
        this.setState({
            count: this.state.count += this.state.prod
        })
    }, 1000)

    render(){
        const itemsList = this.state.items.map((item) =>(
            <section>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.qty} {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>{item.idleD} Sigh-Duck / sec.</p>
                    <button onClick={() => this.buyItems(item.id)}>Buy {item.name}</button>
                </div>
            </section>
        ))
        return (
            <>
                <section>
                    <img src={sighduck} onClick={this.clicked}/>
                    <p>{this.state.count} Sigh-Duck</p>
                    <p>{this.state.prod} Sigh-Duck / sec.</p>
                </section>  
                {itemsList}
            </>
        )
    }
}

export default SighDuck;
