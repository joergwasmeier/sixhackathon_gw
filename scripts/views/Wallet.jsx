/**
 * Created by creativecode on 05.03.16.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import Model from './../model/Model';

var classNames = require('classnames');

require("./Wallet.less");
export default class Wallet extends Component {

    constructor(){
        super();

        this.state = {
            showChargePop:false,
            showRefundPop:false,
            chargeAmount:0,
            refundAmount:0,
            comment:''
        };
    }

    renderActions(){
        var wallet = Model.instance.groupWallets[this.props.params.wid];

        if(wallet.actions.length == 0){
            return <p className="infoMsg">No activities in this Wallet</p>
        } else {
            return <div>
                {
                    wallet.actions.map((item, idx) => {
                        var typ = "amount " + item.type;

                        return(
                            <Paper className="friendItem">
                                <div className="rpop">
                                    <img src="assets/friend3.jpg"  />
                                </div>
                                <p className={typ}>{item.amount.toFixed(2)} CHF</p>
                                <p className="date">06/03/2016</p>

                                <p className="type">
                                    <i className="fa fa-beer beer2Col"/>
                                    {item.comment}
                                </p>
                            </Paper>
                        )
                    })
                }
            </div>
        }
    }

    charge(){
        this.setState({showChargePop:true});
    }

    addCharge(){
        Model.instance.groupWallets[this.props.params.wid].amount += parseInt(this.state.chargeAmount);

        Model.instance.groupWallets[this.props.params.wid].actions.push({
            type:"charge",
            amount:parseInt(this.state.chargeAmount),
            comment:this.state.comment
        });

        Model.instance.groupWallets[this.props.params.wid].actions.reverse();

        this.state.chargeAmount = 0;
        this.state.comment = '';

        this.setState({showChargePop:false});
    }

    refund(){
        this.setState({showRefundPop:true});
    }

    addRefund(){
        Model.instance.groupWallets[this.props.params.wid].amount -= parseInt(this.state.refundAmount);

        Model.instance.groupWallets[this.props.params.wid].actions.push({
            type:"refund",
            amount:parseInt(this.state.refundAmount),
            comment:this.state.comment
        });

        Model.instance.groupWallets[this.props.params.wid].actions.reverse();

        this.state.refundAmount = 0;
        this.state.comment = '';

        this.setState({showRefundPop:false});
    }

    goBack(){
        window.location = '/#/dashboard';
    }

    render(){
        console.log(this.props.params.wid);

        var wallet = Model.instance.groupWallets[this.props.params.wid];
        return (
            <div className="wallet">
                <div className="header">
                    <div className="goBack" onClick={(e) => this.goBack(e)}>go back</div>

                    <p className="amount">{wallet.amount.toFixed(2)} CHF</p>

                    <div className="friendList">
                        <div className="rounded">
                            <img src="assets/friend3.jpg"  />
                        </div>

                        <div className="rounded">
                            <img src="assets/friend1.jpg"  />
                        </div>
                        <div className="rounded">
                            <img src="assets/friend2.jpg"  />
                        </div>
                        <div className="rounded">
                            <img src="assets/friend4.jpg"  />
                        </div>
                    </div>
                    <p className="title">{wallet.name}</p>

                </div>

                <Paper className="chargeBg" zDepth={1} onClick={(e) => this.charge(e)}>
                    <p className="fa fa-plus"></p>
                    <p className="createBtn">Charge</p>
                </Paper>

                <Paper className="refundBg" zDepth={1} onClick={(e) => this.refund(e)}>
                    <p className="fa fa-minus"></p>
                    <p className="createBtn">Refund</p>
                </Paper>

                {this.renderActions()}

                {this.renderChargePop()}
                {this.renderRefundPop()}
            </div>
        )
    }

    renderChargePop(){
        var popClass = classNames({
            'popupBg': true,
            'show': this.state.showChargePop
        });

        return (
            <div className={popClass}>
                <Paper zDepth={1} className="popCont">
                    <h2>How much you want to Charge from your CreditCard?</h2>

                    <TextField
                        hintText="Amount (CHF)"
                        floatingLabelText="Amount (CHF)"
                        value={this.state.chargeAmount}
                        onChange={(e) => this.setState({'chargeAmount': e.target.value})}
                        className='chargeInput'
                    />

                    <TextField
                        hintText="Comment"
                        floatingLabelText="Comment"
                        value={this.state.comment}
                        onChange={(e) => this.setState({'comment': e.target.value})}
                        className='chargeInput'
                    />

                    <RaisedButton className="chargeButton" onClick={(e) => {this.addCharge(e)}}
                                  label="Charge" primary={true}></RaisedButton>
                </Paper>

            </div>
        );
    }

    renderRefundPop(){
        var popClass = classNames({
            'popupBg': true,
            'show': this.state.showRefundPop
        });

        return (
            <div className={popClass}>
                <Paper zDepth={1} className="popCont">
                    <h2>How much you want to Refund?</h2>

                    <TextField
                        hintText="Amount (CHF)"
                        floatingLabelText="Amount (CHF)"
                        value={this.state.refundAmount}
                        onChange={(e) => this.setState({'refundAmount': e.target.value})}
                        className='chargeInput'
                    />

                    <TextField
                        hintText="Comment"
                        floatingLabelText="Comment"
                        value={this.state.comment}
                        onChange={(e) => this.setState({'comment': e.target.value})}
                        className='chargeInput'
                    />



                    <RaisedButton className="chargeButton" onClick={(e) => {this.addRefund(e)}}
                                  label="Refund" primary={true}></RaisedButton>
                </Paper>

            </div>
        );
    }
}


/*
 <Paper className="createBg" zDepth={1} onClick={(e) => this.connectToFacebook(e)}>
 <p className="fa fa-facebook"></p>
 <p className="createBtn">Connect to your Friends</p>
 </Paper>
 */