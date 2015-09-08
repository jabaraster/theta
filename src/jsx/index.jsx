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
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    handleClick: function(pProperty) {
        console.log(pProperty);
    },
    render: function() {
        return (
            <ul className="PropertyList">
            {this.props.data.map((pProperty) => {
                return (
                    <li className="property" onClick={this.handleClick.bind(this, pProperty)}>{pProperty.Name}</li>
                );
            })}
            </ul>
        );
    },
});

const Rooms = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    render: function() {
        return (
            <ul className="Rooms">
            {this.props.data.map((pRoom) => {
                return (
                    <li className="room">{pRoom.Name}</li>
                );
            })}
            </ul>
        );
    },
});

const Page = React.createClass({
    getInitialState: function() {
        return {
            properties: [
            {   Name: 'ザ・熊本タワー',
                Rooms: [{ Name: '101号室' }, { Name: '905号室' }, ]
            },
            {   Name: '森都心プラザ',
                Rooms: [{ Name: '２階プラザ' }, { Name: '２階図書館' }, { Name: '３階ビジネス図書館' }, { Name: '５階大ホール' }, ]
            },
            ],
        };
    },
    render: function() {
        return (
            <div className="Page">
                <PropertyList data={this.state.properties} />
                <Rooms data={[]} />
            </div>
        );
    },
});

React.render(
    <Page />,
    document.getElementById('page')
);
