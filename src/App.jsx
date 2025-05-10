import './App.css'
import HeaderComponent from "./HeaderComponent.jsx";
import Post from "./Post.jsx";
import "./Post.css";
import SideMenu from "./SideMenu.jsx";

function App() {
  let posts = [
    {
      title: "This is first title",
      content: "This is first content"
    },
    {
      title: "This is second title",
      content: "This is second content"
    },
    {
      title: "This is third title",
      content: "This is third content"
    }
  ];

  return (
    <>
      <HeaderComponent />
      <div className={"content"}>
        <div className={"menu"}>
          <SideMenu />
        </div>
        <div className={"posts"}>
          {posts.map((post, index) => (
            <Post key={index} title={post.title} content={post.content}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
