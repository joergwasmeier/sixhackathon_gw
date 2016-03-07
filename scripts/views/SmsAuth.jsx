import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import Model from './../model/Model';

require("./SmsAuth.less");
export default class SmsAuth extends Component {

    constructor(){
        super();
        this.state = {
            smsCode: '',
            errorMsg: ''
        };
    }

    authHandler(e){
        //console.log(this.state.smsCode);
        //window.location = '/#/regAuth'

        if (this.state.smsCode == Model.instance.smscode){
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = (e) => {
                var json = JSON.parse(xmlhttp.responseText);
            };

            xmlhttp.open("POST", "http://team05.eu-gb.mybluemix.net/login/"+this.state.smsCode, true);
            xmlhttp.send();

        } else {
            this.setState({errorMsg:"Please provide the right SMS ("+Model.instance.smscode+")"});
        }
    }

    changeHandler(e){
        this.setState({'smsCode': e.target.value});
    }

    render() {
        return (
        <div className="authCont">
            <img src="/assets/logoWhite.png" className="logoWhite" />
            <Paper className="loginBg" zDepth={1}>
                <TextField
                    floatingLabelText="SMS Token"
                    value={this.state.phonenumber}
                    onChange={(e) => this.changeHandler(e)}
                    errorText={this.state.errorMsg}
                />

            </Paper>

            <RaisedButton label="Verify"
                          className="loginButton"
                          onClick={(e) => this.authHandler(e)}/>

            <a className="footerAPI" href="https://github.com/admitt/whipround/blob/master/README.md">
                Look at our API!
            </a>

            <p className="footer">#SIXHackathon - #Awesome</p>
            <p className="footerBeta">Beta version - Please use Chrome ;)</p>
        </div>
        );
    }
}
