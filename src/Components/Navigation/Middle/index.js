import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi';
import SearchBox from '../../SearchBox';

const Middle = () => {
    return (
        <div className="middle-strip">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logoWrapper">
                    <Link to={'/'}>
                        <img src={logo} alt='Logo' className="logo" />
                    </Link>
                </div>

                <SearchBox />

                <div className="user-area d-flex align-items-center">
                    <Link to={'/profile'}>
                        <Button className="circle mr-4">
                            <FiUser />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Middle;