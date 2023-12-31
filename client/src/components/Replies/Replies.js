import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Replies() {
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const addReply = () => {
    fetch("https://final-project-q72l.onrender.com/api/create/reply", {
      method: "POST",
      body: JSON.stringify({
        id,
        userId: localStorage.getItem("_id"),
        reply,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const fetchReplies = () => {
      fetch("https://final-project-q72l.onrender.com/api/thread/replies", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReplyList(data.replies);
          setTitle(data.title);
        })
        .catch((err) => console.error(err));
    };
    fetchReplies();
  }, [id]);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    console.log({ reply });
    addReply();
    setReply("");
  };

  const goBack = () => {
    navigate("/dashboard");
  }

  return (
    <main className="replies">
      <div className="thread__item">
        <h1>{title}</h1>
      </div>
      <form className="modal__content" onSubmit={handleSubmitReply}>
        <label htmlFor="reply">Reply to the thread</label>
        <textarea
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          type="text"
          name="reply"
          className="modalInput"
        />
        <div className="modalBtns">
          <button className="modalBtn">Send</button>
          <button className="modalBtn back" onClick={goBack}>Go back</button>
        </div>
      </form>

      <div className="thread__container">
        {replyList.map((reply) => (
          <div className="thread__item">
            <p>{reply.text}</p>
            <div className="react__container">
              <p style={{ opacity: "0.5" }}>by {reply.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Replies;
