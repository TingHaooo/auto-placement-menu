import { TonicProvider } from "@tonic-ui/react";
import React from "react";

const AppWrapper = (props) => {
  return (
    <TonicProvider
      colorMode={{
        defaultValue: "dark", // One of: 'dark', 'light'
      }}
      useCSSBaseline={true} // If `true`, apply CSS reset and base styles
    >
      {props.children}
    </TonicProvider>
  );
};

export default AppWrapper;
