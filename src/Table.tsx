import React, { useEffect, useState } from "react";
import { checkViewState, ViewStates } from "./App";

interface IProps {
  view: ViewStates;
}

enum TableContainerWidths {
  initial = "2%",
  split = "max-content",
  full = "100%",
}

export function Table({ view}: IProps) {
  const [width, setWidth] = useState<TableContainerWidths>(
    TableContainerWidths.initial
  );

  useEffect(() => {
    if (checkViewState(view, ViewStates.SPLIT)) {
      setWidth(TableContainerWidths.split);
    } else if (checkViewState(view, ViewStates.FULL)) {
      setWidth(TableContainerWidths.full);
    } else {
      setWidth(TableContainerWidths.initial);
    }
  }, [view]);

  function renderContent() {
    if (checkViewState(view, ViewStates.INITIAL)) {
      return null;
    }
    return (
      <thead>
        <th>First</th>
        <th>Second</th>
        <th>Third</th>
        <th>Fourth</th>
        <th>Fifth</th>
        <th>Sixth</th>
        {checkViewState(view, ViewStates.FULL) && (
          <>
            <th>Seventh</th>
            <th>Eighth</th>
            <th>Nineth</th>
          </>
        )}
      </thead>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        border: "1px solid black",
        width,
      }}
    >
      <table>{renderContent()}</table>
    </div>
  );
}
