import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { jokes: [], loading: true};
    }

    componentDidMount() {
        this.populateJokeData();
    }

    render() {
        let contents = this.state.loading
            ? <p></p>
            : Home.renderContents(this.state.jokes);

        return (
            <div>
                {contents}
            </div>
        );
    }

    static renderContents(jokes) {
        return (
            <div>
                
                <h1>Welcome to my single page web app</h1>
                <br />
                <br />
                <br />
                <h2>Here's a joke for you...</h2>
                <p>{jokes.setup}</p>
                <p>{jokes.punchline}</p>

            </div>
        );
    }

    async populateJokeData() {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        this.setState({ jokes: data, loading: false });
    }
}
