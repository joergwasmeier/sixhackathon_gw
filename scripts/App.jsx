import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';


require("./style.less");

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.

        <div className="login">
            <img src="./scripts/751790.jpg" className="bg" />
            <div className="appContainer">
                <h1>Group Wallet</h1>

                <Paper className="loginBg" zDepth={1}>
                    <TextField
                        hintText="Username"
                        floatingLabelText="Username"
                    />

                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                    />
                </Paper>


                <RaisedButton label="Login" primary={true} className="loginButton" />

                <hr />
                <div className="sign" >or create a Account</div>


                <div className="signFb" >or Signup with Facebook</div>

            </div>
        </div>
      );
  }
}
