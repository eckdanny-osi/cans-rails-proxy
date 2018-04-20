import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

const propTypes = {};
const defaultProps = {};

class App extends PureComponent {
  state = {
    name: '',
    res: null,
    err: null,
  };
  fetchEchoMessage = name => Axios.get(`/api/hello/${name}`);
  handleSubmit = e => {
    e.preventDefault();
    this.fetchEchoMessage(this.state.name).then(
      res => this.setState({ res, err: null }),
      err => this.setState({ res: null, err })
    )
  }
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Alice"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Go!</button>
        </form>
        <br />
        <textarea 
          readOnly
          value={JSON.stringify(this.state.res || this.state.err, null, 2)}
          style={{
            width: '500px',
            height: '400px',
            resize: 'none',
            overflowY: 'scroll'
          }}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
