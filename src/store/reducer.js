const initialState = {
  notes: [
    // remove this default initial object , I only added it to verify the store works correctly
    {
      id: 123,
      timestamp: new Date(Date.now()).toISOString(),
      content: "hi there",
    },
  ],
};

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    //add your cases here for adding / removing / updating notes
    default:
      return state;
  }
}
