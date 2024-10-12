// import Footer from '../../Components/Footer';
// import Navigation from '../../Components/Navigation';
import { Link } from 'react-router-dom';
import './index.css';

const SignIn = () => {
    return (
        <>
            {/* <Navigation /> */}
            <div className="auth-container">
                <div className="auth-box">
                    <h2>Sign In</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <div className="auth-options">
                            {/* <label> */}
                            {/* <input type="checkbox" /> Remember Me */}
                            {/* </label> */}
                            {/* เปลี่ยนลิงก์เป็น Link เพื่อใช้งาน React Router */}
                            {/* <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link> */}
                        </div>

                        <Link to={`/`}>
                            <button type="submit" className="auth-btn">Sign In ➡</button>
                        </Link>
                    </form>
                    <p className="auth-footer">
                        {/* Don't have an account? <Link to="/signup">Sign Up</Link> */}
                    </p>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default SignIn;
