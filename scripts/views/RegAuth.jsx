import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import FacebookLogin from 'react-facebook-login';

require("./RegAuth.less");
export default class RegAuth extends Component {

    constructor(){
        super();
        this.state = {
            smsCode: ''
        };
    }

    authHandler(e){
        window.location = '/#/dashboard'
    }

    changeHandler(e){
        this.setState({'smsCode': e.target.value});
    }

    render() {
        return (
        <div className="regCont">
            <img src="/assets/logoWhite.png" className="logoWhite" />

            <FacebookLogin
                appId="1516087845363705"
                autoLoad={true}
                callback={(e) => this.responseFacebook(e)}
                cssClass="facebookButtonClass"
                icon="fa-facebook"
            />

            <p className="whor">or enter your data</p>

            <Paper className="loginBg" zDepth={1}>
                <TextField
                    hintText="E-Mail"
                    floatingLabelText="E-Mail"
                    value={this.state.phonenumber}
                    onChange={(e) => this.changeHandler(e)}
                />

                <TextField
                    hintText="Firstname"
                    floatingLabelText="Firstname"
                    value={this.state.phonenumber}
                    onChange={(e) => this.changeHandler(e)}
                />

                <TextField
                    hintText="Lastname"
                    floatingLabelText="Lastname"
                    value={this.state.phonenumber}
                    onChange={(e) => this.changeHandler(e)}
                />

                <TextField
                    hintText="Pin"
                    floatingLabelText="Pin"
                    value={this.state.phonenumber}
                    onChange={(e) => this.changeHandler(e)}
                />

            </Paper>

            <RaisedButton label="Register"
                          className="loginButton"
                          onClick={(e) => this.authHandler(e)}/>

        </div>
        );
    }
}
