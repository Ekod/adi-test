import React from "react";

interface IProps {
  fullView: boolean;
}

export function Text({ fullView }: IProps) {
  function renderContent() {
    if (fullView) {
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
