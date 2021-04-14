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
import TopUp from './views/topup/topup';
import PaymentMethod from './views/topup/payment_method'

// import Login from './views/Onbording/components/SigninForm/FormSignin/FormSignin'
// import Register from './views/Onbording/components/FormSIgnup/FormSignup'
// import ForgotPassword from './views/Onbording/components/ForgotPassword/ForgotPassword'
// import ResetPassword from './views/Onbording/components/PasswordRecovery/PasswordRecovery'





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
            <Route exact path="/invite_member" children={InviteNew} />
            <Route exact path="/customer_list" children={Contacts} />
            <Route exact path="/import_contact" component={ImportContacts} />
            <Route exact path="/categories" children={CustomerCategories} />
            <Route exact path="/top_up" children={TopUp} />
            <Route exact path="/payment_method" children={PaymentMethod} />


            {/* <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Main} />
            <Route exact path="/register" component={Main} />
            <Route exact path="/forgot_password" component={Main} />
            <Route exact path="/password_revocery" component={Main} /> */}









          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
