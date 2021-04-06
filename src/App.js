import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './views/Landing/dashboard'
import NewCampaign from './views/campaign/new_campaign'
import ChooseTemplate from './views/campaign/choose_template'
import Overview from './views/Landing/index'
import CampaignHistory from './views/campaign/history'
import CreateOrganization from './views/organization/create_new'
import Organization from  './views/organization/index'
import Modal from './components/Modal/Modal'
import Table from './components/Table/TableBordered'
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
            <Route exact path="/choose_template" component={ChooseTemplate} />
            <Route exact path="/campaign_history" component={CampaignHistory} />
            <Route exact path="/create_organization" component={CreateOrganization} />
            <Route exact path="/organizations" component={Organization} />
            <Route exact path="/table" component={Table} />



          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
