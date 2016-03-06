import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';

import Model from './../model/Model';

require("./Dashboard.less");
export default class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            facebook: false
        };
    }

    createWallet(e){
        window.location = '/#/create-wallet';
    }

    creditCard(e){
        window.location = '/#/credit-card';

    }

    responseFacebook (response){
        console.log(response.accessToken);
        this.setState({'accessToken':response.accessToken});
        this.setState({'facebook':true});
        this.getFriends();
    };

    getFriends() {
        FB.api('/me/friendlists', function(response) {
            console.log(response);
            if(response.data) {

            } else {
                alert("Error!");
            }
        });
    }

    openWallet(idx) {
        window.location = '/#/wal/'+idx;
    }

    renderWallets(){
        if(Model.instance.groupWallets.length == 0){
            return <p className="infoMsg">Hi there, you don´ have actually a GroupWallet.</p>
        } else {
            return <div>
                {
                    Model.instance.groupWallets.map((item, idx) => {
                        return <Paper className="wlletBg" zDepth={1} onClick={(e) => this.openWallet(idx)}>
                                <p className="createBtn">{item.amount.toFixed(2)} CHF</p>
                                <p className="createBtn">{item.name}</p>
                            </Paper>;
                    })
                }
            </div>
        }
    }

    render() {
        return (
            <div className="dashboard">

                <img src="/assets/logoWhite.png" className="logoWhite" />

                {this.renderWallets()}

                <Paper className="createBg" zDepth={1} onClick={(e) => this.createWallet(e)}>
                    <p className="fa fa-plus"></p>
                    <p className="createBtn">Create Group Wallet</p>
                </Paper>

                <Paper className="createBg" zDepth={1} onClick={(e) => this.creditCard(e)}>
                    <p className="fa fa-money"></p>
                    <p className="createBtn">Add CreditCard</p>
                </Paper>

            </div>
        );
    }
}


/*

 <Paper className="createBg" zDepth={1} onClick={(e) => this.createWallet(e)}>
 <p className="fa fa-reply"></p>
 <p className="createBtn">Request Payment</p>
 </Paper>

 <Paper className="createBg" zDepth={1} onClick={(e) => this.connectToFacebook(e)}>
 <p className="fa fa-facebook"></p>
 <p className="createBtn">Connect to your Friends</p>
 </Paper>

 <FacebookLogin
 appId="1516087845363705"
 autoLoad={true}
 callback={(e) => this.responseFacebook(e)}
 cssClass="facebookButtonClass"
 icon="fa-facebook"
 />
 */