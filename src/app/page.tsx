"use client";

import { useState } from "react";

export default function Home() {
  const [list, setList] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") alert("No Text");
    else {
      setList([...list, todo]);
      setTodo("");
    }
  };

  const complete = (isRemove: boolean, idx: number) => {
    if (!isRemove) setCompleted([...completed, list[idx]]);
    setList(list.filter((l, index) => index !== idx));
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="flex gap-3">
        <input
          className="focus:outline-none p-3 rounded-md"
          placeholder="to do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-slate-500 p-3 rounded-md text-white" onClick={add}>
          add
        </button>
      </div>
      <div className="flex gap-3 flex-col relative justify-center">
        {list.map((l, idx) => (
          <div className="p-3 bg-slate-400 text-white w-64 rounded-md">
            <div className="absolute right-3 flex gap-4">
              <p className="text-green-200 cursor-pointer" onClick={() => complete(false, idx)}>
                ✔
              </p>
              <p className="text-red-200 cursor-pointer" onClick={() => complete(true, idx)}>
                ✗
              </p>
            </div>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 flex-col relative justify-center">
        {completed.map((l) => (
          <div className="p-3 bg-slate-700 text-slate-500  w-64 rounded-md">
            <p>{l}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
