import React, {Component} from 'react';
import Login from './views/Login';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import RaisedButton from 'material-ui/lib/raised-button';


require("./App.less");
var classNames = require('classnames');

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            menu: false
        };
    }

    showMenu(){
        if (this.state.menu == true){
            this.setState({menu:false});
        } else {
            this.setState({menu:true});
        }
    }

    goTodashboard(e){
        this.setState({menu:false});
        window.location = '/#/dashboard'
    }

    render() {
        var btnClass = classNames({
            'leftNav': true,
            'show': this.state.menu
        });

        var menuClass = classNames({
            'menuButton': true,
            'fa': true,
            'fa-bars': true,
            'show': this.state.menu
        });

        return (
            <div>
                <img src="/assets/751790.jpg" className="bg" />
                <div className="appContainer">
                    {this.props.children || <Login/>}

                    <div className={btnClass}>
                        <MenuItem
                            onClick={(e) => this.goTodashboard(e)}>
                            Dashboard
                        </MenuItem>
                    </div>

                    <div
                        className={menuClass}
                        onClick={(e) => this.showMenu(e)}
                    />
                </div>
            </div>
        );
    }


}
