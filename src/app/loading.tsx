"use client";
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A2764]">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
    </div>
  );
}