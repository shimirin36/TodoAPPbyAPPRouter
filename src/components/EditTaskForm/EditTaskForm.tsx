"use client"
import { TaskDocument } from "@/models/task";
import React, { useState } from "react";

interface EditTaskFormProps {
  task:TaskDocument
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({task}) =>{
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action="">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            className="mr-2 w-4 h-4"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <label htmlFor="isCompleted" className="text-sm">
            タスクを完了させる
          </label>
        </div>
        <button
          type="submit"
          className="mt-8 py-2 w-full rounded-md text-white bg-blue-500 hover:bg-blue-900 text-sm font-semibold shadow-sm"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
