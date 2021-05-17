import { Button } from "reactstrap";
import Header from '../Header/header';
import ListPosts from "./listPosts";
import './homepage.scss';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='container'>
            <Header />
            <Button className='add-button'>
                <Link to='/add'>
                    Add
                </Link>
            </Button>
            <ListPosts />
        </div>
    )
};

export default Home;