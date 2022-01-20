import React from "react";
import { checkViewState, ViewStates } from "./App";

interface IProps {
  view: ViewStates;
  setView: (view: ViewStates) => void;
}

export function Buttons({
  view,
  setView,
}: IProps) {
  function onRightClickHandler() {
    if (checkViewState(view, ViewStates.INITIAL)) {
      setView(ViewStates.SPLIT);
    } else if (checkViewState(view, ViewStates.SPLIT)) {
      setView(ViewStates.FULL);
    }
  }

  function onLeftClickHandler() {
    if (checkViewState(view, ViewStates.FULL)) {
      setView(ViewStates.SPLIT);
    } else if (checkViewState(view, ViewStates.SPLIT)) {
      setView(ViewStates.INITIAL);
    }
  }

  function renderButtons() {
    if (checkViewState(view, ViewStates.INITIAL)) {
      return (
        <button style={{ width: "100%" }} onClick={onRightClickHandler}>
          &#62;
        </button>
      );
    } else if (checkViewState(view, ViewStates.FULL)) {
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
