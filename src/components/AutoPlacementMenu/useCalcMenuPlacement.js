import { useState } from "react";

const useCalcMenuPlacement = () => {
  const [placement, setPlacement] = useState();
  const callback = (e) => {
    if (!e) return;
    const rect = e.getBoundingClientRect();
    const verticalPlacement =
      rect.bottom > window.innerHeight - rect.top ? "top" : "bottom";
    const horizontalPlacement =
      rect.right > window.innerWidth - rect.left ? "end" : "start";

    setPlacement(`${verticalPlacement}-${horizontalPlacement}`);
  };

  return {
    placement,
    calcMenuPlacementRefCallback: callback,
  };
};

export default useCalcMenuPlacement;
