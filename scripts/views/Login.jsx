import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

require("./Login.less");
var classNames = require('classnames');

import Model from './../model/Model';


export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            phonenumber: '',
            showSpinner: false
        };
    }

    loginHandler(e){
        this.setState({'hide': true});

        setTimeout(()=> {
            this.setState({'showSpinner': true});
        }, 300);

       setTimeout(()=>{
           var xmlhttp = new XMLHttpRequest();

           xmlhttp.onreadystatechange = function() {
               if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                   var myArr = JSON.parse(xmlhttp.responseText);
                   console.log(myArr);

                   Model.instance.smscode = myArr.smscode;

                   //new Model.smsCode = myArr.smscode;
                   window.location = '/#/smsAuth';
               }
           };
           
           xmlhttp.open("GET", "http://team05.eu-gb.mybluemix.net/signup/+412345678", true);
           xmlhttp.send();
       },500);

       // let model = new Model()

    }

    changeHandler(e){
        this.setState({'phonenumber': e.target.value});
    }

    showSpinner(){
        var btnClass = classNames({
            'loginButton': true,
            'hide': this.state.hide,
        });

        if (this.state.showSpinner){
            return <div className="fa fa-circle-o-notch spinner"></div>
        } else{
            return <RaisedButton label="Login"
                                 className={btnClass}
                                 onClick={(e) => this.loginHandler(e)}/>
        }


    }

    render() {
        return (
            <div className="loginCont">
                <img src="/assets/logoWhite.png" className="logoWhite" />

                <Paper className="loginBg" zDepth={1}>
                    <TextField
                        hintText="Your phonenumber"
                        floatingLabelText="phonenumber"
                        value={this.state.phonenumber}
                        onChange={(e) => this.changeHandler(e)}
                    />
                </Paper>
                {this.showSpinner()}


                <p className="footer">#SIXHackathon - #Awesome</p>

            </div>
        );
    }
}
