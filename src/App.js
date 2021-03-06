import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Landing/dashboard";
import NewCampaign from "./views/campaign/new_campaign";
import ChooseTemplate from "./views/campaign/choose_template";
import Overview from "./views/Landing/index";
import CampaignHistory from "./views/campaign/history";
import CreateOrganization from "./views/organization/create_new";
import Organization from "./views/organization/index";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/TableBordered";
import InviteNew from "./views/organization/invite_member";
import Contacts from "./views/contact/index";
import ImportContacts from "./views/contact/import_contact";
import CustomerCategories from "./views/contact/categories";
import addcontact from "./views/contact/addcontact";
import createcontact from "./views/contact/createcontact";
import contactlist from "./views/contact/contactlist.jsx";
import payment_method from "./views/topup/payment_method";
import topup from "./views/topup/topup";
import profile from "./views/profile/profile";
import profileOTP from "./views/profile/profileOTP/profileOTP";
import Reports from "./views/Reports/billing_history";
import billing_history from "./views/Reports/billing_history";
import campaign_report from "./views/Reports/campaign_report/campaign_report";
import campaign_report2 from "./views/Reports/campaign_report2/campaign_report2";
import card_usage from "./views/Reports/card_usage/card_usage";
import card_usage2 from "./views/Reports/card_usage2/card_usage2";
import ApexChartUi from "./views/Reports/card_usage2/card_usageapexchart";
import Contact_us from "./views/settings/Contact_us";
import settings from "./views/settings/Contact_us";
import Activity_log from "./views/settings/activitylog/Activity_log";
import API_integration from "./views/settings/integrations/API_integration";
import "./sass/main.scss";

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
            <Route exact path="/Reports" children={Reports} />
            <Route exact path="/settings" children={settings} />
            <Route exact path="/campaign_history" children={CampaignHistory} />
            <Route exact path="/topup" children={topup} />
            <Route
              exact
              path="/create_organization"
              component={CreateOrganization}
            />
            <Route exact path="/organizations" component={Organization} />
            <Route exact path="/invite_member" component={InviteNew} />
            <Route exact path="/customer_list" component={Contacts} />
            <Route exact path="/import_contact" component={ImportContacts} />
            <Route exact path="/categories" component={CustomerCategories} />
            <Route exact path="/addcontact" component={addcontact} />
            <Route exact path="/createcontact" component={createcontact} />
            <Route exact path="/contactlist" component={contactlist} />
            <Route exact path="/payment_method" component={payment_method} />
            <Route exact path="/topup" component={topup} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/profileOTP" component={profileOTP} />
            <Route exact path="/billing_history" component={billing_history} />
            <Route exact path="/campaign_report" component={campaign_report} />
            <Route
              exact
              path="/campaign_report2"
              component={campaign_report2}
            />
            <Route exact path="/card_usage" component={card_usage} />
            <Route exact path="/card_usage2" component={card_usage2} />
            <Route exact path="/card_usageapexchart" component={ApexChartUi} />
            <Route exact path="/Contact_us" component={Contact_us} />
            <Route exact path="/Activity_log" component={Activity_log} />
            <Route exact path="/API_integration" component={API_integration} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
