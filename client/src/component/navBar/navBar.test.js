import { render, screen, toHaveStyle } from "@testing-library/react";
import App from "../../App";

describe("navBar", () => {
  expect.extend({ toHaveStyle });
  test("check link styles", () => {
    const { getByText } = render(<App />);
    const homelink = screen.getByText("HOME");
    expect(homelink).toHaveStyle({
      fontWeight: "bold",
    });
  });
});
