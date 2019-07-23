import React, { Component } from "react";
import "../static/app.scss";

import Newsletter from "../component/Newsletter";

class index extends Component {
  render() {
    return (
      <main className="container">
        <div className="messages">
          <a href="/">
            <img
              src="/static/img/ic-twitter.png"
              srcSet="/static/img/ic-twitter@2x.png 2x,
            /static/img/ic-twitter@3x.png 3x"
              alt="Twitter"
            />
          </a>
          <a href="/">
            <img
              src="/static/img/ic-mail.png"
              srcSet="/static/img/ic-mail@2x.png 2x,
            /static/img/ic-mail@3x.png 3x"
              alt="Mail"
            />
          </a>
        </div>
        <div className="central-img-desktop">
          <img src="/static/img/iphones-final.png" alt="Iphones" />
        </div>
        <div className="content">
          <img className="logo" src="/static/img/contoso.svg" />
          <div className="central-img-mobile">
            <img src="/static/img/phones-mobile.png" alt="Iphones" />
          </div>
          <p className="descent-primary">
            Curabitur lobortis d lorem id bibendum ut id consectetur.
          </p>
          <p className="descent-secondary">
            Vestibulum rutrum quam vitae fringilla tincidunt amet suspendisse
            nec tortor
          </p>
          <div className="newsletter">
            <input
              className="field"
              type="text"
              placeholder="Your O365 email"
            />
            <input className="btn-submit" type="submit" value="send" />
          </div>
        </div>
      </main>
    );
  }
}

export default index;
