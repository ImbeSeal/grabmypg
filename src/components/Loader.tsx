"use client";
import { dotPulse } from "ldrs";
import type {} from "ldrs";

dotPulse.register();

export function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <l-dot-pulse size="60" speed="" color="black"></l-dot-pulse>
    </div>
  );
  // Default values shown
}
