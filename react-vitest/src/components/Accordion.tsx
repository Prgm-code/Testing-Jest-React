import React from "react";
import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Acordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
      </div>
      {open ? children : null}
    </div>
  );
}

export default Acordion;
