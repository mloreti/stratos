import React from 'react';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <input
          onChange={this.onChange}
          name="email"
          label="email"
          placeholder="email"
          value={this.state.credentials.email} />
        <br/>
        <input
          onChange={this.onChange}
          name="password"
          label="password"
          placeholder="password"
          value={this.state.credentials.password} />
        <br/>
        <input
          type="submit"
          onClick={this.onSave} />
      </div>
    );
  }
}
export default LogInPage;
