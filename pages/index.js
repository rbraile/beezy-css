import React, { Component } from "react";
import "../static/app.scss";

import Newsletter from "../component/Newsletter";

class index extends Component {
  render() {
    return (
      <main className="container">
        <aside className="messages">
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
        </aside>
        <section className="section">
          <figure className="central-img-desktop">
            <img src="/static/img/iphones-final.png" alt="Iphones" />
          </figure>
          <div className="content">
            <figure>
              <img className="logo" src="/static/img/contoso.svg" />
            </figure>
            <figure className="central-img-mobile">
              <img src="/static/img/phones-mobile.png" alt="Iphones" />
            </figure>
            <article className="descent-primary">
              <h1>Curabitur lobortis d lorem id bibendum ut id consectetur.</h1>
            </article>
            <article className="descent-secondary">
              <h2>
                Vestibulum rutrum quam vitae fringilla tincidunt amet
                suspendisse nec tortor
              </h2>
            </article>
            <div className="newsletter">
              <input
                className="field"
                type="text"
                placeholder="Your O365 email"
              />
              <input className="btn-submit" type="submit" value="send" />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default index;
