//import logo from './logo.svg';
import './App.css';
import Post from "./Post"
import Comment from "./Comment"
import Card from "./Card"
import Navbar from "./Navbar"

function App() {
  return (
    <div><Navbar></Navbar>
      <Post userID="อีโม" massage="ตามทันยัง">
          <Comment userId="AYAYA" message="ตัลล้ากกกกกกก" />
      </Post>
      <Card></Card>
      
    </div>
  );
}

export default App;
