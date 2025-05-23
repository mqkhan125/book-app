import "./index.css";
import { Link } from "react-router-dom";

const menus = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Contact us",
    link: "/contact-us",
  },
  {
    title: "Feedback",
    link: "/feedback",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Login",
    link: "/login",
  },
];


const Layout = (props) => {
  return (
    <>
      <div className="header">
        <div className="brand-name">
          <img width={40} src="/images/logo.jpg" alt="" />
          <h1>{props.title}</h1>
        </div>
        <ul>
          {
          menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.link}>{menu.title}</Link>
            </li>
          ))
          }
        </ul>
      </div>
      <div className="section">{props.children}</div>
      <div className="footer">
        <h2>footer</h2>
      </div>
    </>
  );
};

export default Layout;
