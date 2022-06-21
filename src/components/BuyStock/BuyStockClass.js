import React from 'react';
import { withCounter } from '../../hoc/withCounter';
import { withLoading } from '../../hoc/withLoading'
class BuyStockClass extends React.Component {
    render() {
        return (
            <section>
                <h1>How many stock you want to buy</h1>
                { this.props.isLoading? <h1> isLoading </h1> :
                <>
                <button onClick={this.props.handleAdd}>
                    +
                </button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.handleSub}>
                    -
                </button>
                </>
    }
                
            </section>
        );
    }

    // componentDidMount(){
    //     // gitInitStock().then(option => {
    //     //     console.log('initdata',option)
    //     //     this.props.handleSetOption(option);
    //     //     this.props.endLoading()
    //     // // })
    // }
}

const BuyStockClassContainer = withLoading(withCounter(BuyStockClass));

export default BuyStockClassContainer;
