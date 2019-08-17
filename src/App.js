import React, { Component } from "react";
import "./App.css";
//import Textarea from "./textarea/Textarea"
import ArticlePreview from "./articlePreview/ArticlePreview";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//import Articles from "./articlesMock";
import Article from "./article/Article";
import NotFound from './notFound/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
            <Link className="mLogo" to="/">M</Link>
          <Switch>
            <Route exact path="/" component={ArticlePreview} />
            <Route path="/article/:id" component={Article} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
