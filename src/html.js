import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.onscroll = () => {
                        let navbar = document.getElementById('navbar');
                        let home = document.getElementById('home');
                        let homeRect = home.getBoundingClientRect();
                        let contact = document.getElementById('contact');
                        let contactRect = contact.getBoundingClientRect();
                        let about = document.getElementById('about');
                        let aboutRect = about.getBoundingClientRect();
                        let projects = document.getElementById('projects');
                        let projectsRect = projects.getBoundingClientRect();
                        let navbarRect = navbar.getBoundingClientRect();
                        //console.log(navbarRect.y, "  ", aboutRect.y);
                        if(navbarRect.y <= 0) {
                          navbar.className = 'navbar fixed';
                        }
                        if(aboutRect.y >= 0) {
                          navbar.className = 'navbar';
                        }
                        if(homeRect.y <= 0 && homeRect.y + window.innerHeight >= 0) {
                          let hometab = document.getElementsByClassName("home-tab")[0];
                          let active = document.getElementById("active");
                          active.id = "inactive";
                          console.log(hometab);
                          hometab.id = "active";
                        }
                        if(aboutRect.y <= 0 && aboutRect.y + window.innerHeight >= 0) {
                          let abouttab = document.getElementsByClassName("about-tab")[0];
                          let active = document.getElementById("active");
                          active.id = "inactive";
                          console.log(abouttab);
                          abouttab.id = "active";
                        }
                        if(projectsRect.y <= 0 && projectsRect.y + window.innerHeight >= 0) {
                          let projectstab = document.getElementsByClassName("projects-tab")[0];
                          let active = document.getElementById("active");
                          active.id = "inactive";
                          console.log(projectstab);
                          projectstab.id = "active";
                        }
                        if(contactRect.y <= 0 && contactRect.y + window.innerHeight >= 0) {
                          let contacttab = document.getElementsByClassName("contact-tab")[0];
                          let active = document.getElementById("active");
                          active.id = "inactive";
                          console.log(contacttab);
                          contacttab.id = "active";
                        }
                    }
                    `,
              }}
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
