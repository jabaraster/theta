'use strict';

const React = require('react/addons');

/*
const Bootstrap = require('react-bootstrap');
const ButtonToolbar = Bootstrap.ButtonToolbar;
const ButtonGroup = Bootstrap.ButtonGroup;
const Button = Bootstrap.Button;
const Label = Bootstrap.Label;
const Input = Bootstrap.Input;
const Glyphicon = Bootstrap.Glyphicon
const TabbedArea = Bootstrap.TabbedArea;
const TabPane = Bootstrap.TabPane;
*/
const ajax = require('./component/app-ajax.js');

const PropertyList = React.createClass({
    render: function() {
        return (
            <div className="PropertyList">
                <h2>PropertyList</h2>
            </div>
        );
    },
});

const 

const Page = React.createClass({
    render: function() {
        return (
            <div className="Page">
                <h1>Page</h1>
                <PropertyList />
            </div>
        );
    },
});

React.render(
    <Page />,
    document.getElementById('page')
);
