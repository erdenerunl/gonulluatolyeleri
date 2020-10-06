import React, { Component } from "react";
import "./style/home.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row m-5">
            <div className="mx-auto">
              <div className="row mb-5">
                <img
                  className="img-fluid"
                  src="https://www.guletyat.com/uploads/full/_0012_Katman%202.jpg"
                />
              </div>
              <div className="row">
                <div className="mx-auto">
                  <a id="volunteerLink">GÖNÜLLÜ OL !</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
