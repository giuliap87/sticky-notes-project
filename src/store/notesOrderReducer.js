let order = "new-to-old";

export default function notesOrderReducer(state = order, action) {
  return action.type === "CHANGE_ORDER" ? order = action.order : state;
}
