import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {

    console.log("Counters-rendered");

    const {onReset, counters, onDelete, onIncrement} = this.props;
    
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter#{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
//this.props.onReset replaced by onReset and const added to render()

export default Counters;
