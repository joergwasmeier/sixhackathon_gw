/**
 * Created by creativecode on 05.03.16.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';

require("./StoryCheckOut.less");
export default class StoryCheckOut extends Component {

    constructor(){
        super();

        this.state = {
            facebook: false
        };
    }



    render() {
        return (
            <div className="storymock">
                <img src="assets/map.png" />
                <i className="fa fa-beer beer1"/>
                <i className="fa fa-beer beer2"/>
                <i className="fa fa-beer beer3"/>

                <hr/>
                <p>Beer tasting across Europe</p>
                <Paper className="friendItem">
                    <div className="rpop">
                        <img src="assets/friend1.jpg"  />
                    </div>
                    <p className="amount">-200.00 CHF</p>
                    <p className="date">13/03/2016</p>

                    <p className="type">
                        <i className="fa fa-beer beer1Col"/>

                        Many many Beer´s
                    </p>
                </Paper>

                <Paper className="friendItem">
                    <div className="rpop">
                        <img src="assets/friend1.jpg"  />
                    </div>
                    <p className="amount">-150.00 CHF</p>
                    <p className="date">12/03/2016</p>

                    <p className="type">
                        <i className="fa fa-beer beer2Col"/>

                        Many many Beer´s
                    </p>
                </Paper>

                <Paper className="friendItem">
                    <div className="rpop">
                        <img src="assets/friend1.jpg"  />
                    </div>
                    <p className="amount">-100.00 CHF</p>
                    <p className="date">11/03/2016</p>

                    <p className="type">
                        <i className="fa fa-beer beer3Col"/>

                        Many many Beer´s
                    </p>
                </Paper>
            </div>
        );
    }
}