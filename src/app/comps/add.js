//Add.js -> AddForm
"use client";
import AddForm from "./addForm";
import React, { useState } from "react";

const add = () => {
  // State variable to toggle the AddForm display
  const [addForm, setAddForm] = useState(false);

  // State variable to store the task
  const [task, setTask] = useState("");

  // Function to reset the task
  const handleTaskReset = () => setTask(() => "");

  // Function to toggle the AddForm and reset the task
  const handleAddFormToggle = () => {
    setAddForm((prev) => !prev);
    handleTaskReset();
  };

  // Function to add the task via API request
  const handleAddTask = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api", {
      method: "POST",
      body: JSON.stringify({ task: task }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        // Log any errors
        console.error("Error: ", error);
      })
      .then(handleTaskReset()); // Reset the task once the request is complete
  };

  return (
    <>
      <button
        onClick={() => handleAddFormToggle()}
      >
        add to list
      </button>
      {addForm ? (
        <AddForm
          handleAddFormToggle={handleAddFormToggle}
          handleAddTask={handleAddTask}
          setTask={setTask}
          task={task}
        />
      ) : null}
    </>
  );
};

export default add;
