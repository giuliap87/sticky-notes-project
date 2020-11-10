import "./App.css";
import Board from "./Board";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;

//add msg for user when they delete note -- add pop up and change onDelete trigger item
//add edit note option 
//add features to addnote (bold, underline) 
//implement drag and drop
//add label or change color 
//add folders???
