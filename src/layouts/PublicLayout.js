import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class PublicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.capitalizeFirstLetter.bind(this);
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(1).toUpperCase() + string.slice(2);
    }

    componentDidMount() {
        let currentPage = this.capitalizeFirstLetter(this.props.location.pathname);

        document.title = currentPage + ' | Garande - e-learning';
    }


    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}


export default (withRouter(PublicLayout));