import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const home = createSlice({
    name: 'home',
    initialState: {
        isLoading: false,
        listPost: []
    },
    reducers: {
        requestStart: (state, action) => {
            state.isLoading = true;
        },
        getPostsSucceed: (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.listPost = action.payload;
            }
        },
        getPostsFailed: (state, action) => {
            state.isLoading = false;
            alert('Get post failed');
        },
        addPost: (state, action) =>{
            state.listPost = action.payload;
        }
    }
});

export const getListPosts = () => apiCallBegan({
    url: '/posts',
    method: 'GET',
    onStart: requestStart.type,
    onSuccess: getPostsSucceed.type,
    onError: getPostsFailed.type
})

const { reducer, actions } = home;
export const { requestStart, getPostsFailed, getPostsSucceed, addPost } = actions;
export default reducer;