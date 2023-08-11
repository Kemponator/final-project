import "./ForumHome.css";

import React, { useEffect, useState } from "react";
// import Nav from "../Nav/Nav";
import Likes from "../Likes/Likes";
import Comments from "../Comments/Comments";
import { useNavigate } from "react-router-dom";

function ForumHome() {
  const navigate = useNavigate();
  const [thread, setThread] = useState("");
  const [threadList, setThreadList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ thread });
    createThread();
    setThread("");
  };

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        fetch("https://final-project-q72l.onrender.com/api/all/threads")
          .then((res) => res.json())
          .then((data) => setThreadList(data.threads))
          .catch((err) => console.error(err));
      }
    };
    checkUser();
  }, [navigate]);

  const createThread = () => {
    fetch("https://final-project-q72l.onrender.com/api/create/thread", {
      method: "POST",
      body: JSON.stringify({
        thread,
        userId: localStorage.getItem("_id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setThreadList(data.threads);
      })
      .catch((err) => console.error(err));
  };

  const signOut = () => {
      localStorage.removeItem("_id");
      // redirects to the login page
      navigate("/forum");
  };

  return (
    <>
      {/* <Nav /> */}
      <main className="home">
        <div className='navbarRight'>
            <button onClick={signOut}>Sign out</button>
        </div>
        <h2 className="homeTitle">Welcome to marsForum</h2>
        <form className="homeForm" onSubmit={handleSubmit}>
          <div className="home__container">
            <label htmlFor="thread">Title / Description</label>
            <input
              type="text"
              name="thread"
              required
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </div>
          <button className="homeBtn">Create a Thread</button>
        </form>

        <div className="thread__container">
          {threadList.map((thread) => (
            <div className="thread__item" key={thread.id}>
              <p className="thread__title">{thread.title}</p>
              <div className="react__container">
                <Likes
                  numberOfLikes={thread.likes.length}
                  threadId={thread.id}
                />
                <Comments
                  numberOfComments={thread.replies.length}
                  threadId={thread.id}
                  title={thread.title}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ForumHome;
