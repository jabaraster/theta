'use strict';

const React = require('react/addons');

const Bootstrap = require('react-bootstrap');
const Glyphicon = Bootstrap.Glyphicon
const CSSTransitionGroup = React.addons.CSSTransitionGroup;
/*
const ButtonToolbar = Bootstrap.ButtonToolbar;
const ButtonGroup = Bootstrap.ButtonGroup;
const Button = Bootstrap.Button;
const Label = Bootstrap.Label;
const Input = Bootstrap.Input;
const TabbedArea = Bootstrap.TabbedArea;
const TabPane = Bootstrap.TabPane;
*/
const ajax = require('./component/app-ajax.js');
const classNames = require('classnames');

const PropertyList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        visible: React.PropTypes.bool.isRequired,
        onPropertyClick: React.PropTypes.func.isRequired,
    },
    handleClick: function(pProperty) {
        this.props.onPropertyClick({ property: pProperty });
    },
    render: function() {
        return (
            <CSSTransitionGroup component="div" transitionName="fade" className="PropertyList top-level">
                {this.props.visible ? 
                <ul className="properties">
                    {this.props.data.map((pProperty, idx) => {
                        return (
                            <li key={idx} className="property" onClick={this.handleClick.bind(this, pProperty)}>{pProperty.Name}</li>
                        );
                    })}
                </ul> : 
                null
                }
            </CSSTransitionGroup>
        );
    },
});

const RoomList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        visible: React.PropTypes.bool.isRequired,
        onRoomClick: React.PropTypes.func.isRequired,
    },
    handleRoomClick: function(e) {
        this.props.onRoomClick(e);
    },
    render: function() {
        return (
            <CSSTransitionGroup component="div" transitionName="fade" className="RoomList top-level">
                {this.props.visible ? 
                <ul className="rooms">
                    {this.props.data.map((pRoom, idx) => {
                        return (
                            <li key={idx} className="room">
                                <Room data={pRoom} onRoomClick={this.props.onRoomClick} />
                            </li>
                        );
                    })}
                </ul> : 
                null
                }
            </CSSTransitionGroup>
        );
    },
});

const Room = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired,
        onRoomClick: React.PropTypes.func.isRequired,
    },
    handleRoomClick: function() {
        this.props.onRoomClick({ room: this.props.data });
    },
    render: function() {
        return (
            <div className="Room" onClick={this.handleRoomClick}>
                <img className="room-thumbnail" src="/pano/pano.jpg" />
                <div className="room-name">{this.props.data.Name}</div>
            </div>
        );
    },
});

const BackButton = React.createClass({
    propTypes: {
        visible: React.PropTypes.bool.isRequired,
        onClick: React.PropTypes.func.isRequired,
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <CSSTransitionGroup component="div" transitionName="fade" className="back">
                {this.props.visible ? 
                <Glyphicon glyph="circle-arrow-left" onClick={this.handleClick} />
                : null
                }
            </CSSTransitionGroup>
        );
    },
});

const Page = React.createClass({
    getInitialState: function() {
        return {
            properties: InitialData,
            currentProperty: null,
            propertyListVisible: true,
            mode: 'select-property',
        };
    },
    handlePropertyClick: function(e) {
        this.setState({ currentProperty: e.property, mode: 'select-room' });
    },
    handleBackClickOnSelectRoom: function() {
        this.setState({ mode: 'select-property' });
    },
    handleRoomClick: function(e) {
        this.setState({ mode: 'view-room' });
    },
    handleBackClickOnViewRoom: function() {
        this.setState({ mode: 'select-room' });
    },
    render: function() {
        return (
            <div className="Page">
                <PropertyList data={this.state.properties}
                              onPropertyClick={this.handlePropertyClick}
                              visible={this.state.mode === 'select-property'}
                />

                <BackButton visible={this.state.mode === 'select-room'} onClick={this.handleBackClickOnSelectRoom} />
                <RoomList data={this.state.currentProperty ? this.state.currentProperty.Rooms : []}
                          visible={this.state.mode === 'select-room'}
                          onRoomClick={this.handleRoomClick}
                />

                <BackButton visible={this.state.mode === 'view-room'} onClick={this.handleBackClickOnViewRoom} />
            </div>
        );
    },
});

const InitialData = [
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
    ];

React.render(
    <Page />,
    document.getElementById('page')
);
