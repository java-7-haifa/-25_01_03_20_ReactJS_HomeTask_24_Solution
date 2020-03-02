import React from "react";

export default class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: props.person,
        lastName: "",
        phone: "",
        city: ""
      },
      personView: {
        name: "",
        lastName: "",
        phone: "",
        city: ""
      }
    };
  }

  changeName(value) {
    this.state.person.name = value;
    this.setState(this.state);
  }

  changeLastName(value) {
    this.state.person.lastName = value;
    this.setState(this.state);
  }

  changePhone(value) {
    this.state.person.phone = value;
    this.setState(this.state);
  }

  changeCity(value) {
    this.state.person.city = value;
    this.setState(this.state);
  }

  onOkClickHandler() {
    this.state.personView = { ...this.state.person };
    this.setState(this.state);
  }

  render() {
    return (
      <div className="card">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={this.state.person.name}
            onChange={e => this.changeName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.person.lastName}
            onChange={e => this.changeLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={this.state.person.phone}
            onChange={e => this.changePhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={this.state.person.city}
            onChange={e => this.changeCity(e.target.value)}
          />
          <button onClick={this.onOkClickHandler.bind(this)}>Ok</button>
        </div>
        <div>
          <p>Name: {this.state.personView.name}</p>
          <p>Last Name: {this.state.personView.lastName}</p>
          <p>Phone: {this.state.personView.phone}</p>
          <p>City: {this.state.personView.city}</p>
        </div>
      </div>
    );
  }
}
