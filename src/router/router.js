import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Bundle from './Bundle';
import Home from 'bundle-loader?lazy&name=home!../component/Home';
import Detail from 'bundle-loader?lazy&name=home!../component/Detail'

const Loading = ()=>{
    return <div>Loading.....</div>
}
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);
const getRouter = () =><Router>
        <div>
            <Switch>
                <Route exact path='/' component={createComponent(Home)}/>
                <Route path='/detail' component={createComponent(Detail)}/>
            </Switch>
        </div>
    </Router>


export default getRouter