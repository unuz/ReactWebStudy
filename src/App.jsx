import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import NotFound from './routes/NotFound';
import Chat from './routes/Chat';
import Redux from './routes/Redux';
import Hooks from './routes/Hooks';
import Class from './routes/Class';
import FruitArray from './routes/FruitArray';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about/:username" component={About}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/mypage" component={MyPage}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/chat" component={Chat}></Route>
          <Route path="/redux" component={Redux}></Route>
          <Route path="/hooks" component={Hooks}></Route>
          <Route path="/class" component={Class}></Route>
          <Route path="/array" component={FruitArray}></Route>
          <Route component={NotFound}></Route>
        </Switch>
    </Router>
  );
};

export default App;