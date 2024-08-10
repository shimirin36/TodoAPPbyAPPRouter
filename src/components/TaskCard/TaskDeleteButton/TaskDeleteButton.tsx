import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <form action="">
      <button type="submit">
        <FaTrashAlt className="hover:text-gray-700 text-lg cursor-pointer" />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
