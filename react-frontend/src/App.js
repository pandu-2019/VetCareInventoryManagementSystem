import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDrugComponent from './components/ListDrugComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddNewDrugComponent from './components/AddNewDrugComponent';
import UpdateDrugComponent from './components/UpdateDrugComponent';
import ViewDrugComponent from './components/ViewDrugComponent';
import HomePageComponent from './components/HomePageComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomePageComponent}></Route>
                          <Route path = "/drugs" component = {ListDrugComponent}></Route>
                          <Route path = "/add-drug/:productName" component = {AddNewDrugComponent}></Route>
                          <Route path = "/view-drug/:productName" component = {ViewDrugComponent}></Route>
                          <Route path = "/home" component = {HomePageComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
