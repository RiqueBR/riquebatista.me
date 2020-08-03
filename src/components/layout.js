import React from "react"
import PropTypes from "prop-types"


const Layout = ({ children }) => {
  

  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <p>Built by Rique Batista</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
