const initialState = {
  order: "new-to-old",
};

export default function notesOrderReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_ORDER":
      if (action.order === "new-to-old") {
        return { order: "new-to-old" };
      } else if (action.order === "old-to-new") { 
        return { order: "old-to-new" };
      } else {
        return state
      }
    default:
      return state;
  }
}
