"use client";

export function Header() {
  return (
    <header className="bg-warning text-warning-foreground p-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl">Shadcn Demo</h1>
        <div className="flex items-center gap-2">
          <span>home</span>
          <span>about</span>
          <span>contact</span>
        </div>
      </div>
    </header>
  );
}
