import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Keyframes, animated } from 'react-spring/renderprops'


class BaseAuthLayout extends Component {
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

        //change document title according to path name
        document.title = currentPage + ' | Garande - e-learning';
    }


    render() {
        // const rightState = this.props.settingsDrawerOpen ? 'open' : 'close';
        return (
            <React.Fragment>
                {this.props.children}
                {/* <RightModal show={this.props.settingsDrawerOpen} style={{ backgroundColor: 'red', height: '400px', top: '20%' }}>
                        <h1>Hello</h1>
                    </RightModal>
                <StickyToolbar /> */}
            </React.Fragment>
        )
    }
}

// const RightModal = Keyframes.Spring({
//     open: { delay: 0, width: '330px', x: 0 },
//     close: async call => {
//         await { delay: 400 }
//         await call({ delay: 0, width: '0px', x: 0 })
//     }
// });

const mapStateToProps = (state) => {
    const { settingsDrawerOpen } = state.Layout;


    return {
        settingsDrawerOpen,
    }
}

export default (withRouter(connect(mapStateToProps, {})(BaseAuthLayout)));