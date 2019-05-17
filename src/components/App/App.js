import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import LoginView from "../VolunteerViews/Login";
import Case from "../VolunteerViews/Case"; 
import VolunteerLanding from "../VolunteerViews/VolunteerLanding";
import AdminLanding from "../AdminViews.js/AdminLanding";
import RegisterVolunteer from "../AdminViews.js/RegisterVolunteer"
import Volunteers from "../AdminViews.js/Volunteers";
import VolunteerBio from "../AdminViews.js/VolunteerBio";
import Events from "../AdminViews.js/Events";
import Cases from "../AdminViews.js/Cases";
import CaseList from "../AdminViews.js/CaseList";
import BioForm from "../AdminViews.js/BioForm";
import MedicalForm from "../AdminViews.js/MedicalForm"
import SchoolForm from "../AdminViews.js/SchoolForm";
import HousingForm from "../AdminViews.js/HousingForm";
import IceFacility from "../AdminViews.js/IceFacility";
import BondForm from "../AdminViews.js/BondForm";
import FosterForm from "../AdminViews.js/FosterForm";
import AttorneyForm from "../AdminViews.js/AttorneyForm";
import LegalStatusForm from "../AdminViews.js/LegalStatusForm";
import SocialWorker from "../AdminViews.js/SocialWorker";
import GroceryForm from "../AdminViews.js/GroceryForm";
import FundForm from "../AdminViews.js/FundForm";
import BioFamilyInfo from "../VolunteerViews/BioFamilyInfo";

function App() {
  return (
    <div>
      <Router>
        {/* VOLUNTEER */}
        <Route exact path="/" component={LoginView} />
        <Route path="/case" component={Case} />
        <Route path="/volunteer-landing" component={VolunteerLanding} />

        {/* ADMIN */}
        <Route path="/admin-landing" component={AdminLanding} />
        <Route path="/register-volunteer" component={RegisterVolunteer} />
        <Route path="/volunteers" component={Volunteers} />
        <Route path="/volunteer-bio" component={VolunteerBio} />
        <Route path="/events" component={Events} />
        <Route path="/cases" component={Cases} />
        <Route path="/case-list" component={CaseList} />

        {/* FORMS */}
        <Route path="/bio-form" component={BioForm} />
        <Route path="/medical-form" component={MedicalForm} />
        <Route path="/school-form" component={SchoolForm} />
        <Route path="/housing-form" component={HousingForm} />
        <Route path="/ice-form" component={IceFacility} />
        <Route path="/bond-form" component={BondForm} />
        <Route path="/foster-form" component={FosterForm} />
        <Route path="/attorney-form" component={AttorneyForm} />
        <Route path="/legal-form" component={LegalStatusForm} />
        <Route path="/social-form" component={SocialWorker} />
        <Route path="/grocery-form" component={GroceryForm} />
        <Route path="/fund-form" component={FundForm} />


        {/* BIO */}
        <Route path="/bio-family-info" component={BioFamilyInfo} />
      </Router>
    </div>
  );
}

export default App;
