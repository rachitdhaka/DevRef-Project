import React from "react";

export default function Footer() {
  return (
    <div className="p-8 mt-60 flex justify-between ">
      <div className=" w-fit ">
        <div>
          <p className="text-5xl font-extrabold tracking-tight">
            BUILD <br />{" "}
            <span className="dark:text-gray-700 text-neutral-600">
              THE FUTURE.
            </span>
          </p>
        </div>

        <div className="pl-8">
          <ol>
            <li className="mt-6 hover:text-sky-400">Frontend Patterns</li>
            <li className="mt-2 hover:text-sky-400">Backend Logic</li>
            <li className="mt-2 hover:text-sky-400">Database Architectures</li>
            <li className="mt-2 hover:text-sky-400">System Design</li>
          </ol>
        </div>
      </div>

      <div className="w-96 flex flex-col justify-between">
        <p className="dark:text-neutral-400">
          <span className="font-bold text-2xl dark:text-neutral-100">
            Dev's Ref
          </span>
          <br />
          <span className="p-4">
            The definitive library for the modern web architect.
            Precision-engineered components and logic for those who build the
            future,
          </span>
        </p>

        <p>
          {new Date().getFullYear()} DEV REF INC. DESIGNED FOR THE ARCHITECT.
        </p>
      </div>
    </div>
  );
}
