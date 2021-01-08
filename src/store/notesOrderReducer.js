export default function notesOrderReducer(state = "new-to-old", action) {
  return action.type === "CHANGE_ORDER" ? action.order : state;
}
