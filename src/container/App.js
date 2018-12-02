import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route ,Switch} from "react-router-dom";
import Home from "./../components/Home/Home";
import MakeJubbot from "./../components/MakeJubbot/MakeJubbot";
import Order from "./../components/Order/Order";
import Header from "./../components/Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Header/>
          <Switch>
            <Route path={"/"} component={Home} exact/>
            <Route path={"/make-jubbot"} component={MakeJubbot}/>
            <Route path={"/order"} component={Order}/>
            <Route component={()=><div>Error Page</div>}/>
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
