// import Footer from '../../Components/Footer';
// import Navigation from '../../Components/Navigation';
import { Link } from 'react-router-dom';
import './index.css';


const SignUp = () => {
    return (
        <>
            {/* <Navigation /> */}
            <div className="auth-container">
                <div className="auth-box">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <h3>Address</h3>
                        <input type="text" placeholder="Address" required />
                        <input type="text" placeholder="Sub-District" required />
                        <input type="text" placeholder="District" required />
                        <input type="text" placeholder="Province" required />
                        <input type="text" placeholder="Postal Code" required />

                        <Link to={`/`}>
                            <button type="submit" className="auth-btn">Sign Up</button>
                        </Link>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default SignUp;
