import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders navbar and checks for six links", () => {
    render(<App />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(6);
  });
  test("check name on navbar links and respective href", () => {
    render(<App />);
    // Home
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    // Martial Arts
    expect(screen.getByRole("link", { name: "Martial Arts" })).toHaveAttribute(
      "href",
      "/martialarts"
    );
    // Timetable
    expect(screen.getByRole("link", { name: "Time Table" })).toHaveAttribute(
      "href",
      "/timetable"
    );
    // Membership
    expect(screen.getByRole("link", { name: "Membership" })).toHaveAttribute(
      "href",
      "/membership"
    );
    //Team
    expect(screen.getByRole("link", { name: "Team" })).toHaveAttribute(
      "href",
      "/team"
    );
    // Contact
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
