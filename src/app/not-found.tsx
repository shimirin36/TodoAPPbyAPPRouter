import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 text-gray-600">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-4xl font-medium">Page Not Found</p>
      <Link
        href="/"
        className="mt-4 text-xl p-2 text-blue-600 hover:underline hover:rounded-lg hover:bg-slate-300"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;