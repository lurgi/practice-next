"use client"; //useState를 사용하기 위함.

import { useState } from "react";

export default function hi() {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>here is secret hi</h1>
      <span>{state}</span>
      <button onClick={() => setState((prev) => prev + 1)}>click</button>
    </>
  );
}
