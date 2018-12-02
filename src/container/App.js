import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./../components/Home/Home";
import MakeJubbot from "./../components/MakeJubbot/MakeJubbot";
import Order from "./../components/Order/Order";
import Header from "./../components/Header/Header";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as mainActions from "./../actions/mainActions";

class App extends Component {
  addToStore(){
    console.log('ADD',this.trackInput.value);
    this.props.onAdd(this.trackInput.value);
    this.trackInput.value = '';
  }
  render() {
    console.log(this.props.testStore);
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path={"/"} component={Home} exact/>
            <Route path={"/make-jubbot"} component={MakeJubbot}/>
            <Route path={"/order"} component={Order}/>
            <Route component={() => <div>Error Page</div>}/>
          </Switch>
          <div>
            <input type="text" ref={(input)=> {this.trackInput = input} }/>
            <button onClick={this.addToStore.bind(this)}> Add</button>
            <ul>
              {this.props.testStore.map((child, i) =><li key={i}>{child}</li>

              )}
            </ul>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => ({
  testStore: state
});
function mapDispatchToProps(dispatch) {
  return {...bindActionCreators(mainActions, dispatch)}
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
