import React, { useState, useEffect } from 'react';
import { Input, Button, List, Checkbox } from 'antd';
// import './ToDoListPage.scss';

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t);
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-page fade-in">
      <h1 style={{ color: "#FFEBEE" }}>To-Do List</h1>
      <div className="task-input">
        <Input style={{marginBottom: "1rem"}} value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
        <Button onClick={addTask} type="primary">Add Task</Button>
      </div>
      <List
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item  className={item.completed ? "completed" : ""}>
            <Checkbox style={{ color: "#FFEBEE" }} checked={item.completed} onChange={() => toggleTask(index)}>{item.text}</Checkbox>
            <Button onClick={() => deleteTask(index)} danger>Delete</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

// Comments Page
const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    if (savedComments) setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="comments-page">
      <h1>Leave a Comment</h1>
      <Input.TextArea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter your comment" rows={4} />
      <Button onClick={addComment} type="primary">Add Comment</Button>
      <List header={<h2>Comments</h2>} dataSource={comments} renderItem={(item, index) => <List.Item key={index}>{item}</List.Item>} />
    </div>
  );
};

export default ToDoListPage;