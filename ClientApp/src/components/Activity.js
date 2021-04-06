import React, { Component } from 'react';

export class Activity extends Component {
  static displayName = Activity.name;

  constructor(props) {
    super(props);
      this.state = { activities: [], loading: true};
  }

    render() {

        let contents = this.state.loading
            ? <p></p>
            : Activity.renderContent(this.state.activities);

    return (
      <div>
            <button className="btn btn-primary" onClick={() => this.populateActivityData()}>Get activity</button>
            {contents}
            
      </div>
      );
    }

    static renderContent(activities) {
        return (   
            <div>
                <p>Activity : {activities.activity}</p>
                <p>Type : {activities.type}</p>
                <p>Participants : {activities.participants} </p>
                {activities.link ?
                    <p> Link : <a href={activities.link}>{activities.link}</a></p> :
                    ''
                }
                
            </div>
        );
    }

    async populateActivityData() {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        this.setState({ activities: data, loading: false });
    }
}
