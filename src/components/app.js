import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton onClick={this.handleClick}/>
            </div>
        );
    }
}
