import React from "react";

interface IProps {
  initialView: boolean;
  setInitialView: (value: boolean) => void;
  splitView: boolean;
  setSplitView: (value: boolean) => void;
  fullView: boolean;
  setFullView: (value: boolean) => void;
}

export function Buttons({
  initialView,
  splitView,
  fullView,
  setInitialView,
  setSplitView,
  setFullView,
}: IProps) {
  function onRightClickHandler() {
    if (initialView) {
      setInitialView(false);
      setSplitView(true);
    } else if (splitView) {
      setSplitView(false);
      setFullView(true);
    }
  }

  function onLeftClickHandler() {
    if (fullView) {
      setFullView(false);
      setSplitView(true);
    } else if (splitView) {
      setSplitView(false);
      setInitialView(true);
    }
  }

  function renderButtons() {
    if (initialView) {
      return (
        <button style={{ width: "100%" }} onClick={onRightClickHandler}>
          &#62;
        </button>
      );
    } else if (fullView) {
      return (
        <button style={{ width: "100%" }} onClick={onLeftClickHandler}>
          &#60;
        </button>
      );
    } else {
      return (
        <>
          <button style={{ width: "100%" }} onClick={onLeftClickHandler}>
            &#60;
          </button>
          <button style={{ width: "100%" }} onClick={onRightClickHandler}>
            &#62;
          </button>
        </>
      );
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%" }}>{renderButtons()}</div>
    </div>
  );
}
