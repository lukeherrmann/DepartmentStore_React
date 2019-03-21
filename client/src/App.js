import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/Navbar";
import NoMatch from './components/NoMatch';
import Items from "./components/Items";
import Departments from "./components/Departments";
import DepartmentsForm from './components/DepartmentsForm';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route path="/departments/:department_id/items" component={Items} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
