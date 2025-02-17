import React, { useState, useEffect } from "react";
import { Input, Button, List } from "antd";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    if (savedComments) setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (comment.trim() && name.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        text: comment,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setComment("");
      setName("");
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-page fade-in">
      <h1 style={{ color: "#FFEBEE" }}>Залиште ваш коментар</h1>
      <Input
        style={{ marginBottom: "1rem" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше ім'я"
      />
      <Input.TextArea
        style={{ marginBottom: "1rem" }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Напишіть ваш коментар"
        rows={4}
      />
      <Button onClick={addComment} type="primary">
        Add Comment
      </Button>
      <List
        style={{ color: "#FFEBEE" }}
        header={<h2>Коментарі</h2>}
        dataSource={comments}
        renderItem={(item) => (
          <List.Item style={{color: '#FFEBEE'}} key={item.id}>
            <div>
              <strong>{item.name}</strong> ({item.timestamp})
              <p>{item.text}</p>
            </div>
            <Button onClick={() => deleteComment(item.id)} danger>
              Видалити
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsPage;
