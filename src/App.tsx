import React, { useState } from "react";
import { Text } from "./Text";
import { Buttons } from "./Buttons";
import { Table } from "./Table";

export function App() {
  const [initialView, setInitialView] = useState(true);
  const [splitView, setSplitView] = useState(false);
  const [fullView, setFullView] = useState(false);

  return (
    <div style={{ display: "flex", height: "70vh" }}>
      <Table
        initialView={initialView}
        splitView={splitView}
        fullView={fullView}
      />
      <Buttons
        initialView={initialView}
        splitView={splitView}
        fullView={fullView}
        setInitialView={setInitialView}
        setSplitView={setSplitView}
        setFullView={setFullView}
      />
      <Text fullView={fullView}/>
    </div>
  );
}
