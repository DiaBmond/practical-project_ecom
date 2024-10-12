import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <nav className="navBar">
            <div className="container">
                <div className="navPart2">
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/">Home</Link></li>
                        <li className="list-inline-item"><Link to="/products">Shop</Link></li>
                        <li className="list-inline-item"><Link to="/sellproduct">My Product</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Links;