export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCF3Xj9YXQrc3qQXTS5bh4RQYKWFoUh6z4j3VMfmsFFnsQt8AXAPujQwI9tSjjbpdPi7S77iB9Su8QnWtM_NY9ibmo0gqbi93lSD2ADKXgfZXmzOVOJntdapLvxM",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;
