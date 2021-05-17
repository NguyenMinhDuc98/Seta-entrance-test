import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPosts } from "./homeSlice";
import ReactFlexyTable from "react-flexy-table";
import 'react-flexy-table/dist/index.css';

function ListPosts() {
    const dispatch = useDispatch();
    const home = useSelector(state => state.home);

    const { isLoading, listPost } = home;

    useEffect(() => {
        dispatch(getListPosts());
    }, [dispatch]);

    const columns=[
        {
            header: 'ID',
            key: 'id'
        },
        {
            header: 'User ID',
            key: 'userId'
        },
        {
            header: 'Title',
            key: 'title'
        },
        {
            header: 'Body',
            key: 'body'
        },
    ]

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'>Loading</div>
                    : (
                        <div>
                            <ReactFlexyTable 
                                className='posts-table'
                                data={listPost}
                                columns={columns}
                                pageSize={10}
                                pageSizeOptions={[10]}
                            />
                        </div>
                    )
            }
        </div>
    )
};

export default ListPosts;