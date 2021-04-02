import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a class="left brand-logo">FeedbackR</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
