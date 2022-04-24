import { Component } from "react";

interface IProps {
    name: string;
}

export class TitleClassComponent extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}