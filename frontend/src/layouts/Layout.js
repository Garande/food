import React, { Component } from 'react';
import { Menu, Layout, Breadcrumb  } from 'antd';
import { connect } from 'react-redux';
import {fetchCategories, fetchFoods} from '../store/actions'

const {Content, Header, Footer} = Layout;

class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            today: new Date().getFullYear(),
        }
    }


    componentDidMount(){
        this.props.fetchFoods();
        this.props.fetchCategories()
    }


    render() {
        return (
            <div className='d-flex flex-column flex-root'>
            <Layout>
                <div style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white', height: '60px' }}>
                    <div className="logo" />

                    <h2>Datamine Food</h2>
                    
                </div>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Foods ©{this.state.today} Created by Datamine IT</Footer>
            </Layout>
            </div>
        )
    }
}


export default connect(null, {fetchCategories, fetchFoods})(MainLayout);