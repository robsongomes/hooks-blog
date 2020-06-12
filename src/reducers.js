function postReducer(state, action) {
  switch (action.type) {
    case "POST_CREATE":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      };
      return [newPost, ...state];

    default:
      return state;
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;

    case "LOGOUT":
      return "";

    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postReducer(state.posts, action)
  };
}
