import logo from '../assets/logo192.png';
import LogoutBtn from './LogoutBtn';

const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="title">{props.title}</h1>
            <div className="user-info">
                <h3 className="username">Welcome {props.name}</h3>
                <LogoutBtn/>
            </div>
        </header>
    )
}

export default Header;