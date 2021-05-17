import AddForm from "./addForm";
import './addPostPage.scss';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../Home/homeSlice";

function AddPostPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values) => {
        // dispatch(addPost(values));

        setTimeout(() => {
            history.push('/');
        }, 2000)
    }

    return (
        <AddForm
            onSubmit={handleSubmit}
        />
    )
}

export default AddPostPage;