import { fireEvent, render, screen } from "@testing-library/react";
import { AppWrapper } from "../../testUtils/rtl/index";
import AutoPlacementMenu from "./index";

const testItems = [
  { name: "Settings" },
  { name: "Accounts" },
  { name: "Privacy" },
];

describe("Auto placement menu testing", () => {
  describe("Menu can show and close correctly", () => {
    it("Click menu toggle button, menu will show correctly", () => {
      render(
        <AppWrapper>
          <AutoPlacementMenu items={testItems} />
        </AppWrapper>
      );

      fireEvent.click(screen.getByTestId("auto-placement-menu-toggle-button"));

      expect(screen.getByText("Privacy")).toBeInTheDocument();
    });

    it("Click menu toggle again, menu will close correctly", () => {
      render(
        <AppWrapper>
          <AutoPlacementMenu items={testItems} />
        </AppWrapper>
      );

      fireEvent.click(screen.getByTestId("auto-placement-menu-toggle-button"));
      expect(screen.getByText("Privacy")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId("auto-placement-menu-toggle-button"));
      expect(screen.queryByText("Privacy")).not.toBeVisible();
    });
  });
});
