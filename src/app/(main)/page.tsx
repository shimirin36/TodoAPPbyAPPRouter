import TaskCard from "@/components/TaskCard/TaskCard";
import { error } from "console";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

export default async function Main() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link
          className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
          href="/new"
        >
          <MdAddTask className="size-5"></MdAddTask>
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}