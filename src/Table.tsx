import React, { useEffect, useState } from "react";

interface IProps {
  initialView: boolean;
  splitView: boolean;
  fullView: boolean;
}

enum TableContainerWidths {
  initial = "2%",
  split = "max-content",
  full = "100%",
}

export function Table({ initialView, splitView, fullView }: IProps) {
  const [width, setWidth] = useState<TableContainerWidths>(
    TableContainerWidths.initial
  );

  useEffect(() => {
    if (splitView) {
      setWidth(TableContainerWidths.split);
    } else if (fullView) {
      setWidth(TableContainerWidths.full);
    } else {
      setWidth(TableContainerWidths.initial);
    }
  }, [initialView, splitView, fullView]);

  function renderContent() {
    if (initialView) {
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
        {fullView && (
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
