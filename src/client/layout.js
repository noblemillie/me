import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import SideNav from './containers/sidenav.js';
import Home from './containers/home.js';
import About from './containers/about.js';
import Projects from './containers/projects.js';
import Sidebar from 'react-sidebar';

// debugger; // eslint-disable-line no-debugger


export default class Layout extends Component {

    constructor(props) {
      super(props);

      this.state = {
        sidebarOpen: false
      };
      // this.onSetSidebarOpen = onSetSidebarOpen.bind(this);
    }

    // onSetSidebarOpen(open) {
    //   this.setState({sidebarOpen: open});
    // }


    render() {
      var sidebarContent = <b>Sidebar content</b>;

      return (
        <div>
          <Sidebar sidebar={sidebarContent}
                   open={this.state.sidebarOpen}
                   onSetOpen={this.onSetSidebarOpen}
          >
            <b>Main content</b>
          </Sidebar>

          <div>
            <div className={'b-nav'}>
              <div className={'b-nav__wrap'}>
                <div className={'b-nav__homelink'}>
                  <Link to='/'>home</Link>
                  <Link to='/about'>about</Link>
                  <Link to='/projects'>projects</Link>

                </div>
              </div>
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </div>

        </div>
      );
    }
}
