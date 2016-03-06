/**
 * Created by creativecode on 06.03.16.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';

import Model from './../model/Model';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

require("./CreditCard.less");
export default class CreditCard extends Component {

    constructor(){
        super();

        this.state = {
            number: '',
            cvv: '',
            name: ''
        };
    }

    save(){
        window.location = '/#/dashboard'
    }

    render() {
        return (
            <div className="creditcard">

                <img src="/assets/logoWhite.png" className="logoWhite" />

                <Paper className="createBg" zDepth={1}>
                    <TextField
                        hintText="CreditCard-Number"
                        floatingLabelText="CreditCard-Number"
                        value={this.state.walletName}
                        onChange={(e) => this.changeHandler(e)}
                        className='walletInput'
                    />

                    <TextField
                        hintText="CreditCard-CVV"
                        floatingLabelText="CreditCard-CVV"
                        value={this.state.walletName}
                        onChange={(e) => this.changeHandler(e)}
                        className='walletInput'
                    />

                    <TextField
                        hintText="CreditCard-EndMont"
                        floatingLabelText="CreditCard-EndMont"
                        value={this.state.walletName}
                        onChange={(e) => this.changeHandler(e)}
                        className='walletInput'
                    />

                    <TextField
                        hintText="CreditCard-EndYear"
                        floatingLabelText="CreditCard-EndYear"
                        value={this.state.walletName}
                        onChange={(e) => this.changeHandler(e)}
                        className='walletInput'
                    />

                    <TextField
                        hintText="CreditCard-Name"
                        floatingLabelText="CreditCard-Name"
                        value={this.state.walletName}
                        onChange={(e) => this.changeHandler(e)}
                        className='walletInput'
                    />


                    <RaisedButton className="saveWallet" onClick={(e) => {this.save(e)}}
                                  label="Save Credit Card" primary={true}></RaisedButton>
                </Paper>
            </div>
        );
    }
}
