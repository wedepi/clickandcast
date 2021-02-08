import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <>
        <footer style={{ background: "black", paddingBottom: 50 }} className="footer has-text-white-ter">
          <div className="content has-text-centered has-text-white-ter">
            <div className="container has-text-white-ter">
              <div style={{ maxWidth: '100vw' }} className="columns">
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <span
                          className="navbar-item"
                          style={{ color: "white" }}
                        >
                          hola@clickandcast.com
                        </span>
                      </li>
                      <li>
                        <a
                          className="navbar-item"
                          href="https://www.instagram.com/Clickandcastok/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/terminos-condiciones">
                          Términos y Condiciones
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <section style={{ paddingTop: 40 }}>
                    <a
                      className="navbar-item"
                      href="https://clickandcast.com/"
                      rel="noopener noreferrer"
                    >
                      <span>
                        Ir a la plataforma
                      </span>
                    </a>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="container" style={{ paddingTop: 25, paddingBottom: 25 }}>
          © 2021 Click&Cast. Derechos reservados.
        </div>
      </>
    )
  }
}

export default Footer
