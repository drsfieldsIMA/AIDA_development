import Footer from "./Footer"
import Nav from "./Nav"
import NavbarLayout  from "./NavLayout";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
    <div className="app-wrapper">
      <NavbarLayout/>
      <main className="main-wrapper">
      { children }
      </main>
      <footer className="footer-wrapper" >
      <Footer/>
      </footer>
    </div>
    </>
  );
}
 
Layout.propTypes = {
  NavbarLayout: PropTypes.node,
};

export default Layout;