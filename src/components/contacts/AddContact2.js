import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: 'haha',
    email: 'haha@gmail.com',
    phone: '777-777-7777'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name" />
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" />
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                className="form-control form-control-lg"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" />
              <input
                type="text"
                name="phone"
                placeholder="Enter phone..."
                className="form-control form-control-lg"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
