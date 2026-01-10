"use client";
import React from "react";
import { Button } from "../components/Button";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <p>Developer Under Work</p>

      <Button>
        <a href="/Main">Go to Main Page</a>
      </Button>
    </div>
  );
}
