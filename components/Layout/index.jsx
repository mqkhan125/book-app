import './index.css'
import Homepage from '../Home';

const Layout = (props) =>{
    return(
        <>
        <div className="header">
            <div className="brand-name">
                <img width={40} src="/images/logo.jpg" alt="" />
                <h1>{props.title}</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Feedback</li>
                <li>Services</li>
                <li>Login</li>
            </ul>
        </div>
        <div className="section">
            {props.children}
        </div>
        <div className="footer">
            <h2>footer</h2>
        </div>
        
        </>
    )
}

export default Layout;