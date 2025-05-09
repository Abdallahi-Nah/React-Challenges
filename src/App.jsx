import './App.css'
import HeaderComponent from "./HeaderComponent.jsx";
import Post from "./Post.jsx";
import "./Post.css";
import SideMenu from "./SideMenu.jsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className={"content"}>
        <div className={"menu"}>
          <SideMenu />
        </div>
        <div className={"posts"}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
