import { Component } from "react";

export class CounterClassComponent extends Component {
    state: Readonly<{count: number}>
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        };
        this.add = this.add.bind(this);
    }

    add() {
        this.setState(previousState => ({
            count: (previousState as any).count +1
        }))
    }
    
    render() {         
        return (
            <div>
                <button onClick={this.add}>Add to counter</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
} 