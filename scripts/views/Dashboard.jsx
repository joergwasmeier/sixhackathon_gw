import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';


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

    render() {
        return (
            <div className="dashboard">

                <img src="/assets/logoWhite.png" className="logoWhite" />

                <p className="infoMsg">Hi there, you don´ have actually a GroupWallet.</p>

                <Paper className="createBg" zDepth={1} onClick={(e) => this.createWallet(e)}>
                    <p className="fa fa-plus"></p>
                    <p className="createBtn">Create Group Wallet</p>
                </Paper>

                <Paper className="createBg" zDepth={1} onClick={(e) => this.createWallet(e)}>
                    <p className="fa fa-money"></p>
                    <p className="createBtn">Pay</p>
                </Paper>

                <Paper className="createBg" zDepth={1} onClick={(e) => this.createWallet(e)}>
                    <p className="fa fa-reply"></p>
                    <p className="createBtn">Request Payment</p>
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

 <FacebookLogin
 appId="1516087845363705"
 autoLoad={true}
 callback={(e) => this.responseFacebook(e)}
 cssClass="facebookButtonClass"
 icon="fa-facebook"
 />
 */