import React, { Component } from 'react';

export class Dog extends Component {
    static displayName = Dog.name;

    constructor(props) {
        super(props);
        this.state = { dog: [], loading: true };
    }

    render() {

        let contents = this.state.loading
            ? <p></p>
            : Dog.renderContent(this.state.dog);

        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.populateImageData()}>Click here to see a random dog</button>
                {contents}

            </div>
        );
    }

    static renderContent(dog) {
        return (
            <div>

                <img src={dog.message} class="img-fluid" style={{paddingTop: '10px'}}  ></img>

            </div>
        );
    }

    async populateImageData() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        this.setState({ dog: data, loading: false });
    }
}