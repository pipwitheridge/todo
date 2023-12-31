//TodoList.js -> EditForm
"use client";
import React, { useState } from "react";
import EditForm from "./editForm";

const TodoList = () => {
  // State for checked tasks (using an array of checked IDs)
  const [checked, setChecked] = useState([0]);

  // State for task data retrieved from the API
  const [taskData, setTaskData] = useState([]);

  // State to control the edit form's visibility
  const [editForm, setEditForm] = useState(false);

  // State for the selected task that is being edited
  const [selectedTask, setSelectedTask] = useState({});

  // State for the current task being edited or added
  const [task, setTask] = useState("");

  // Function to toggle the edit form's visibility
  const handleEditFormToggle = () => {
    setEditForm((prev) => !prev);
  };

  // Fetch the task data from the API when the component is rendered
  fetch("http://127.0.0.1:3000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((data) => {
      setTaskData(data); // Set the task data state with the API response
    });
  });

  // Function to handle task editing
  const handleEdit = () => {
    fetch("http://127.0.0.1:3000/api", {
      method: "PATCH",
      body: JSON.stringify({ id: selectedTask.id, task: task }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      handleEditFormToggle(); // Hide the edit form
      setTask(""); // Reset the task state
    });
  };

  // Function to handle task deletion
  const handleDelete = (id) => {
    fetch("http://127.0.0.1:3000/api", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error("Error: ", error)); // Log any errors
  };

  // Function to handle task checkbox toggle
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value); // Add task ID to checked array
    } else {
      newChecked.splice(currentIndex, 1); // Remove task ID from checked array
    }

    setChecked(newChecked); // Update the checked state
  };

  return (
    <>
      {editForm ? (
        <EditForm
          selectedTask={selectedTask}
          handleEditFormToggle={handleEditFormToggle}
          setTask={setTask}
          task={task}
          handleEdit={handleEdit}
        />
      ) : null}
      <div>
        {/* Map through the task data and render each task */}
        {taskData.map((data) => {
          const labelId = `checkbox-list-label-${data.id}`;

          return (
            <div
              key={data.id}
            >
              <button
                role={undefined}
                onClick={handleToggle(data.id)}
              >
                
                <div id={labelId}>{data.task}</div>
                <button
                    onClick={() => (
                      handleEditFormToggle(),
                      setSelectedTask({ id: data.id, task: data.task })
                    )}> 
                    edit
                  </button>
                  <button onClick={() => handleDelete(data.id)}> 
                    delete                  
                  </button>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
