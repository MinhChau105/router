import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Chitiet extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-3">Fluid jumbo heading</h1>
    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores voluptatem excepturi, sint unde ab repellendus totam quia quae, non qui explicabo animi possimus? Unde a sunt omnis saepe repellendus!</p>
    <hr className="my-2" />
    <p>More info</p>
    <p className="lead">
    <Link to="/Tintuc">About</Link>
    </p>
  </div>
</div>

            </div>
        );
    }
}

export default Chitiet;
