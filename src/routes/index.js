import React, { Suspense, } from 'react';
import { Route, HashRouter as BrowserRouter, Switch, Redirect } from 'react-router-dom';

//routes
import { authProtectedRoutes, publicRoutes } from './routes'


//layouts
import PublicLayout from '../layouts/PublicLayout'
import BaseAuthLayout from '../layouts/BaseAuthLayout'

const AppRoute = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => {
    return <Route {...rest} render={props => {
        // if (isAuthProtected && !localStorage.getItem('currentUser')) {
        //     return (
        //         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        //     )
        // }

        return <Layout><Component {...props} /></Layout>
    }} />
}


/**
 * Main Route Component
 */

const Routes = (props) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        {/* Public routes */}
                        {
                            publicRoutes.map((route, key) => <AppRoute path={route.path} layout={PublicLayout} component={route.component} key={key} isAuthProtected={false} />)
                        }


                        {/* Private routes */}
                        {
                            authProtectedRoutes.map((route, key) => <AppRoute path={route.path} layout={BaseAuthLayout} component={route.component} key={key} isAuthProtected={true} />)
                        }
                    </Switch>
                </Suspense>
            </React.Fragment>
        </BrowserRouter>
    );
}


export default Routes;