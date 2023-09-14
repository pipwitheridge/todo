//Add -> AddForm.js
"use client";
import React from "react";

const AddForm = ({ handleAddFormToggle, handleAddTask, setTask, task }) => {
  return (
    <div>
      <input
        required
        value={task}
        onChange={(e) => setTask((prev) => e.target.value)}
      />
      <div>
        <button onClick={handleAddTask}>
          add
        </button>
        <button onClick={handleAddFormToggle}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default AddForm;
