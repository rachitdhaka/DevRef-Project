import React from "react";

export default function Footer() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mt-20 sm:mt-40 md:mt-60 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
      <div className="w-full md:w-fit">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left">
            BUILD <br />{" "}
            <span className="dark:text-gray-700 text-neutral-600">
              THE FUTURE.
            </span>
          </p>
        </div>

        <div className="pl-0 md:pl-8 mt-4 md:mt-0">
          <ol className="text-center md:text-left">
            <li className="mt-4 md:mt-6 hover:text-sky-400 cursor-pointer transition-colors">
              Frontend Patterns
            </li>
            <li className="mt-2 hover:text-sky-400 cursor-pointer transition-colors">
              Backend Logic
            </li>
            <li className="mt-2 hover:text-sky-400 cursor-pointer transition-colors">
              Database Architectures
            </li>
            <li className="mt-2 hover:text-sky-400 cursor-pointer transition-colors">
              System Design
            </li>
          </ol>
        </div>
      </div>

      <div className="w-full md:w-96 flex flex-col justify-between gap-4 text-center md:text-left">
        <p className="dark:text-neutral-400">
          <span className="font-bold text-xl sm:text-2xl dark:text-neutral-100">
            Dev's Ref
          </span>
          <br />
          <span className="block mt-2 text-sm sm:text-base">
            The definitive library for the modern web architect.
            Precision-engineered components and logic for those who build the
            future,
          </span>
        </p>

        <p className="text-xs sm:text-sm">
          {new Date().getFullYear()} DEV REF INC. DESIGNED FOR THE ARCHITECT.
        </p>
      </div>
    </div>
  );
}
