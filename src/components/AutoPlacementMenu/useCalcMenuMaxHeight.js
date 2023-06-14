import { useState } from "react";

const MAXIMUM_MENU_LIST_MAX_HEIGHT = 400;
const MENU_LIST_HEIGHT_PADDING = 50;

const useCalcMenuMaxHeight = () => {
  const [maxHeight, setMenuListMaxHeight] = useState(
    MAXIMUM_MENU_LIST_MAX_HEIGHT
  );

  const callback = (e) => {
    if (!e) return;
    const rect = e.getBoundingClientRect();
    const maxHeight =
      Math.min(
        Math.max(rect.bottom, window.innerHeight - rect.top),
        MAXIMUM_MENU_LIST_MAX_HEIGHT
      ) - MENU_LIST_HEIGHT_PADDING;
    setMenuListMaxHeight(maxHeight);
  };

  return {
    maxHeight,
    calcMenuMaxHeightRefCallback: callback,
  };
};

export default useCalcMenuMaxHeight;
