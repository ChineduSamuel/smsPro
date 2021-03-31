import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Landing/index'
import Dashboard from './views/Landing/dashboard'
import NewCampaign from './views/campaign/new_campaign'
import ChooseTemplate from './views/campaign/choose_template'
import Cards from './components/Cards/TemplateCards'
import Landing from './views/Landing/Landing'
import Overview from './views/Landing/index'
import './sass/main.scss'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" children={Overview} />
            <Route exact path="/overview" children={Dashboard} />
            <Route exact path="/new_campaign" children={NewCampaign} />
            <Route exact path="/choose_template" children={ChooseTemplate} />
            <Route exact path="/cards" children={Cards} />






          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
