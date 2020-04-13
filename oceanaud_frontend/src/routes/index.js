import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../screens/About'
import Home from '../screens/Home'
import AdultServices from '../screens/AdultServices'
import PediatricServices from '../screens/PediatricServices'
import OurProf from '../screens/OurProf'

const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/proffessionals' component={OurProf}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/pediatric' component={PediatricServices}/>
            <Route exact path='/adults' component={AdultServices}/>
        </Switch>
    )
}

export default Routes;