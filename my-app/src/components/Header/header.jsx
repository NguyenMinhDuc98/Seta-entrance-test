import { Link } from "react-router-dom";

function Header() {
    return(
        <div className='header'>
            <h1>
                <Link to='/'>Seta entrance test</Link>
            </h1>
        </div>
    )
};

export default Header;