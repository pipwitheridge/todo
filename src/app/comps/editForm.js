//TodoList -> EditForm.js
"use client";
import React from "react";

const EditForm = ({
  handleEditFormToggle,
  selectedTask,
  setTask,
  handleEdit,
}) => {
  return (
    <div>
      <input
        required
        defaultValue={selectedTask.task}
        onChange={(e) => setTask((prev) => e.target.value)}
      />
      <div>
        <button onClick={handleEdit}>
          confirm
        </button>
        <button onClick={handleEditFormToggle}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default EditForm;
