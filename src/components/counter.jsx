import React, { Component } from 'react';

class Counter extends Component {
    // imageUrl: 'https://picsum.photos/200'
    
    componentWillUnmount() {
        console.log("Counter #", this.props.counter.id, "deleted.")
        console.log("Counter - Unmounted");
    }

    formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? 'zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    render() { 
        console.log("Counter - Rendered")
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m-2 btn-2m"
                > 
                    Delete 
                </button>
            </div>
        )
    }
}
 
export default Counter;