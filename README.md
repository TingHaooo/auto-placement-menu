# Auto Placement Menu

Auto Placement Menu is a React component for creating a dynamic and responsive menu that automatically adjusts its position based on the available space. This repository contains the implementation of the Auto Placement Menu component, along with integration and end-to-end tests.

## Installation

To use the Auto Placement Menu component in your React project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/TingHaooo/auto-placement-menu.git
   ```

2. Navigate to the project directory:

   ```shell
   cd auto-placement-menu
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Demo

To see the demo Auto Placement Menu component in local:

```shell
npm start
```

## Usage

To use the Auto Placement Menu component in your React application, you need to import it from the `/components` folder:

```jsx
import AutoPlacementMenu from "./components/AutoPlacementMenu";

function App() {
  return (
    <div>
      {/* Your other components */}
      <AutoPlacementMenu />
    </div>
  );
}
```

You can customize the appearance and behavior of the menu by passing props to the `AutoPlacementMenu` component.

## Testing

This project includes both integration tests and end-to-end (e2e) tests.

### Integration Testing

Integration tests are located in the `/components` folder. To run the integration tests, use the following command:

```shell
npm run rtl-test
```

This command will execute the integration tests using the React Testing Library.

### End-to-End (e2e) Testing

End-to-end tests are located in the `/tests` folder. To run the e2e tests, use the following command:

```shell
npm run e2e-test
```

This command will execute the e2e tests using Playwright.

## Important Folders

- `/components`: Contains the Auto Placement Menu component and integration tests.
- `/testUtils`: Includes utilities for React Testing Library and Playwright.
- `/tests`: Contains the end-to-end (e2e) tests.
