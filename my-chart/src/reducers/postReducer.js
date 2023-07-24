
const postReducer = (
    state = { posts: [], loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "UPLOAD_START":
        return { ...state, error: false, uploading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state, uploading: false, error: true };
      
      default:
        return state;
    }
  };
  
  export default postReducer;