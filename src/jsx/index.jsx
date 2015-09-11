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
        onPropertyClick: React.PropTypes.func.isRequired,
    },
    handleClick: function(pProperty) {
        this.props.onPropertyClick({ property: pProperty });
    },
    render: function() {
        return (
            <div className="PropertyList">
                <ul className="properties">
                {this.props.data.map((pProperty) => {
                    return (
                        <li className="property" onClick={this.handleClick.bind(this, pProperty)}>{pProperty.Name}</li>
                    );
                })}
                </ul>
            </div>
        );
    },
});

const RoomList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    render: function() {
        return (
            <div className="RoomList">
                <ul className="rooms">
                {this.props.data.map((pRoom) => {
                    return (
                        <li className="room">{pRoom.Name}</li>
                    );
                })}
                </ul>
            </div>
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
            {   Name: 'ザ・熊本タワー1',
                Rooms: [{ Name: '101号室' }, { Name: '905号室' }, ]
            },
            {   Name: 'ザ・熊本タワー2',
                Rooms: [{ Name: '101号室' }, { Name: '905号室' }, ]
            },
            {   Name: 'ザ・熊本タワー3',
                Rooms: [{ Name: '101号室' }, { Name: '905号室' }, ]
            },
            {   Name: '森都心プラザ',
                Rooms: [{ Name: '２階プラザ' }, { Name: '２階図書館' }, { Name: '３階ビジネス図書館' }, { Name: '５階大ホール' }, ]
            },
            {   Name: '森都心プラザ1',
                Rooms: [{ Name: '２階プラザ' }, { Name: '２階図書館' }, { Name: '３階ビジネス図書館' }, { Name: '５階大ホール' }, ]
            },
            {   Name: '森都心プラザ2',
                Rooms: [{ Name: '２階プラザ' }, { Name: '２階図書館' }, { Name: '３階ビジネス図書館' }, { Name: '５階大ホール' }, ]
            },
            {   Name: '森都心プラザ3',
                Rooms: [{ Name: '２階プラザ' }, { Name: '２階図書館' }, { Name: '３階ビジネス図書館' }, { Name: '５階大ホール' }, ]
            },
            ],
            currentRooms: [],
        };
    },
    handlePropertyClick: function(e) {
        this.setState({ currentRooms: e.property.Rooms });
    },
    render: function() {
        return (
            <div className="Page">
                <PropertyList data={this.state.properties} onPropertyClick={this.handlePropertyClick} />
                <RoomList data={this.state.currentRooms} />
            </div>
        );
    },
});

React.render(
    <Page />,
    document.getElementById('page')
);
