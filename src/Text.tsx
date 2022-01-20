import React from "react";
import { checkViewState, ViewStates } from "./App";

interface IProps {
  view: ViewStates;
}

export function Text({ view }: IProps) {
  function renderContent() {
    if (checkViewState(view, ViewStates.FULL)) {
      return null;
    }

    return (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        optio a necessitatibus, incidunt architecto repellat hic illo nisi quae
        velit ratione consequuntur eos. Eos assumenda inventore accusantium odit
        obcaecati tempore?
      </>
    );
  }
  return (
    <div
      style={{ border: "1px solid black", height: "100%", maxWidth: "100%", minWidth: '2%' }}
    >
      {renderContent()}
    </div>
  );
}
