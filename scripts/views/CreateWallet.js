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

var classNames = require('classnames');

require("./CreateWallet.less");
export default class CreateWallet extends Component {

    constructor(){
        super();

        this.state = {
            walletName: '',
            popup: false,
            viewst:false
        };
    }

    changeHandler(e){
        this.setState({'walletName': e.target.value});
    }

    createWallet(e){
        console.log("createWallet");
    }

    addFriend(e){
        console.log('addfriend');
        this.setState({'popup': true})
    }

    closeFriend(e){
        console.log('closeFriend');
        this.setState({'popup': false})
        this.setState({'viewst': true})
    }

    renderFriends(e){
        if (!this.state.viewst){
            return <div/>
        } else {
            return (
                <div className="friendList">
                    <div className="rounded">
                        <img src="assets/friend1.jpg"  />
                    </div>
                    <div className="rounded">
                        <img src="assets/friend1.jpg"  />
                    </div>
                    <div className="rounded">
                        <img src="assets/friend1.jpg"  />
                    </div>
                </div>
            )
        }
    }

    render() {
        var popClass = classNames({
            'popupBg': true,
            'show': this.state.popup
        });

        return (
            <div className="createWallet">
                <img src="/assets/logoWhite.png" className="logoWhite" />
                    <Paper zDepth={1} className="inputCont">
                        <TextField
                            hintText="What is the Wallet Subject"
                            floatingLabelText="What is the Wallet Subject"
                            value={this.state.walletName}
                            onChange={(e) => this.changeHandler(e)}
                            className='walletInput'
                        />
                        <p>Add your friends!</p>

                        {this.renderFriends()}

                        <FloatingActionButton className="addFriend" onClick={(e) => this.addFriend(e)}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </Paper>

                    <RaisedButton className="saveWallet" onClick={(e) => {this.save(e)}}
                                  label="Save Wallet" primary={true}></RaisedButton>

                    <div className={popClass}>
                        <Paper zDepth={1} className="popCont">
                            <h2>Choose your </h2>

                            <div>
                                <div className="friendItem">
                                    <div className="rpop">
                                        <img src="assets/friend1.jpg"  />
                                    </div>
                                    <p>Daria Stepanova</p>
                                </div>

                                <div className="friendItem">
                                    <div className="rpop">
                                        <img src="assets/friend1.jpg"  />
                                    </div>
                                    <p>Daria Stepanova</p>
                                </div>

                                <div className="friendItem">
                                    <div className="rpop">
                                        <img src="assets/friend1.jpg"  />
                                    </div>
                                    <p>Daria Stepanova</p>
                                </div>
                            </div>

                            <RaisedButton className="addFriends" onClick={(e) => {this.closeFriend(e)}}
                                          label="Add Friends" primary={true}></RaisedButton>
                        </Paper>

                    </div>

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