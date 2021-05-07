import React from 'react';
import Nav from './Nav';
import HomePage from './HomePage'
import Films from './Films';
import FilmsId from './FilmsId';
import People from './People';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
    return(
      <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route path ="/" exact component={HomePage}/>
              <Route path ="/films" exact component={Films}/>
              <Route path ="/films/:id" component={FilmsId}/>
              <Route path ="/people" exact component={People}/>
              <Route path ="/species" exact component={Species}/>
              <Route path ="/starships" exact component={Starships}/>
              <Route path ="/vehicles" exact component={Vehicles}/>
            </Switch>
        </div>
        </Router>
    )
}
export default App
