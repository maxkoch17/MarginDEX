import React from 'react'
import { render } from 'react-dom'

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
    return
    <div className="LoginBox">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<Input
							ref={this.passwordInputRef}
							onChange={this.handlePasswordInputChange}
							type="password"
							placeholder={t('password')}
							value={this.state.passwordInputValue}
							autoFocus
							required
							errorMessage={this.state.passwordError}
						/>
					</div>
					<div className="form-group form-group-2">
						<Button primary fullwidth type="submit" value={t('login')} disabled={!this.state.passwordInputValue || this.state.isLoggingIn}/>
					</div>
				</form>
			</div>
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }
}
export default LoginContainerCo;
