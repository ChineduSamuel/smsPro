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
import InviteNew from './views/organization/invite_member'
import Contacts from './views/contact/index'
import ImportContacts from './views/contact/import_contact'
import CustomerCategories from './views/contact/categories'


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
            <Route exact path="/campaign_history" children={CampaignHistory} />
            <Route exact path="/create_organization" component={CreateOrganization} />
            <Route exact path="/organizations" component={Organization} />
            <Route exact path="/invite_member" component={InviteNew} />
            <Route exact path="/customer_list" component={Contacts} />
            <Route exact path="/import_contact" component={ImportContacts} />
            <Route exact path="/categories" component={CustomerCategories} />







          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
