import { AutoPlacementMenu } from "./components";
import { TonicProvider } from "@tonic-ui/react";

// Just some demo data
export const items = [
  { name: "Settings-1" },
  { name: "Settings-2" },
  { name: "Settings-3" },
  { name: "Settings-4" },
  { name: "Settings-5" },
  { name: "Settings-6" },
  { name: "Accounts-1" },
  { name: "Accounts-2" },
  { name: "Accounts-3" },
  { name: "Accounts-4" },
  { name: "Accounts-5" },
  { name: "Accounts-6" },
  { name: "Privacy-1" },
  { name: "Privacy-2" },
  { name: "Privacy-3" },
  { name: "Privacy-4" },
  { name: "Privacy-5" },
  { name: "Privacy-6" },
];

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
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AutoPlacementMenu items={items} />
      </div>
    </TonicProvider>
  );
}

export default App;
