import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.counters.length === this.props.counters.length) {
            prevProps.counters.forEach(item => {
                if (item.value !== this.props.counters[item.id - 1].value) {
                    console.log("Counter #", item.id, " value got changed...")
                }
            });
        }
    }

    render() { 
        console.log("Counters - Rendered")
        const {onReset, onIncrement, onDelete, counters} = this.props
        return ( 
            <div>
                <button
                    onClick={onReset} 
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {
                    counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onIncrement={onIncrement}
                        onDelete={onDelete} 
                        counter={counter}
                    >
                        <h4> Counter #{counter.id} </h4>
                    </Counter>
                )}
            </div>
         );
    }
}
 
export default Counters;