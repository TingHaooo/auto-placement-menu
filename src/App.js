import { AutoPlacementMenu } from "./components";
import { TonicProvider } from "@tonic-ui/react";

function App() {
  return (
    <TonicProvider
      colorMode={{
        defaultValue: "dark", // One of: 'dark', 'light'
      }}
      useCSSBaseline={true} // If `true`, apply CSS reset and base styles
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <AutoPlacementMenu />
        </div>
      </div>
    </TonicProvider>
  );
}

export default App;
