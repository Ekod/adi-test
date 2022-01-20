import React, { useState } from "react";
import { Text } from "./Text";
import { Buttons } from "./Buttons";
import { Table } from "./Table";

export enum ViewStates {
  INITIAL = "INITIAL",
  SPLIT = "SPLIT",
  FULL = "FULL",
}

export function checkViewState(stateView: ViewStates, passedView: ViewStates){
  return stateView === passedView;
}

export function App() {
  const [view, setView] = useState<ViewStates>(ViewStates.INITIAL);

  return (
    <div style={{ display: "flex", height: "70vh" }}>
      <Table view={view} />
      <Buttons view={view} setView={setView} />
      <Text view={view} />
    </div>
  );
}
