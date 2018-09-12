import React from 'react'
import { render } from 'react-dom'
import './Components/input.css'

class LoginContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  state = {
    passwordInputValue: '',
    isLoggingIn: false,
  };

  passwordInputRef = React.createRef();


  handlePasswordInputChange = value => {
    this.setState({passwordInputValue: value});
  };

  handleSubmit = async event => {
  }

  render(){
    return(
    /*<div className="LoginBox">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
            <label>
              Seed
            </label>
						<input
              className="Input"
							ref={this.passwordInputRef}
							onChange={this.handlePasswordInputChange}
							type="password"
							placeholder={"Seed"}
							value={this.state.passwordInputValue}
							autoFocus
							required
							errorMessage={this.state.passwordError}
						/>
					</div>
					<div className="form-group form-group-2">
						<button primary fullwidth type="submit" value={"Submit"}
            />
					</div>
				</form>
			</div>*/
      <div className="container">

  <div className="demo-flex-spacer"></div>

  <div className="webflow-style-input">
    <input className="" type="email" placeholder="What's your email?"></input>
    <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
  </div>

  <div className="demo-flex-spacer"></div>
  </div>
    )
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }
}
export default LoginContainer;
