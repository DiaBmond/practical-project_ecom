import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import './index.css'; // อย่าลืมสร้างไฟล์ CSS สำหรับตกแต่งหน้า Profile

const Profile = () => {
    // ข้อมูลตัวอย่างของผู้ใช้
    const user = {
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        profileImage: 'path_to_profile_image', // ใช้ URL รูปภาพโปรไฟล์
        address: '123 Main St, City, Country',
        phone: '+1234567890'
    };

    return (
        <>
            <Navigation />
            <div className='profile'>
                <h2>Profile</h2>
                <div className='profile-info'>
                    <img src={user.profileImage} alt='Profile' className='profile-image' />
                    <div className='profile-details'>
                        <h3>{user.username}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address}</p>
                    </div>
                </div>
                <button className='edit-profile-btn'>Edit Profile</button>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
