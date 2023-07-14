import React, { Component } from 'react'

class HomePageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    goToInventory() {
        this.props.history.push(`/drugs`);
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                <button className="btn btn-primary btn-block">Home</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary btn-block">About</button>
                </div>
                <div class="col">
                <button class="btn btn-success btn-block">Contact</button>
                </div>
            </div>
            </div>


          );
    }
}

export default HomePageComponent