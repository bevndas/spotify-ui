export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDrZoVIx4U0YH1hihIMah6GFulJjXiZdEEiLqjsbsVoGZktqE01C9QSiK_1l-VnV6S9ZdQHEGggRw9BdWsdxI_x1KpD3N5OQ9jwZ89jSKvmjoKU8vbFtlD9U9EroR9aEnP9BBAO_M2Jfk97ji1Y_CukO9pUSCz-TemLy0s0bjjiuFo7",
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;
