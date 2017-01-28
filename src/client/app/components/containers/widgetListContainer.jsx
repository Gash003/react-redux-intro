import React from 'react';
import axios from'axios';

import WidgetList from '../views/widgetList';


const WidgetListContainer = React.createClass({
    getInitialState() {
        return {
            widgets: []
        }
    },
    componentDidMount() {
        axios.get('/widgets').then(({data}) => {
            this.setState({widgets: data.widgets})
        });
    },
    render() {
        return (
            <WidgetList widgets={this.state.widgets} />
        );
    }
});


export default WidgetListContainer;