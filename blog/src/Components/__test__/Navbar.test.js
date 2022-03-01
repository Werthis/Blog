import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  it("checking Link text", async () => {
    render(<MockNavbar />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("checking heading role and text", async () => {
    render(<MockNavbar />);
    const hedding1Element = screen.getByRole("heading", {
      name: "React Web Apps",
    });
    expect(hedding1Element).toBeInTheDocument();
  });

  describe("nav", () => {
    it("checking navigation role", async () => {
      render(<MockNavbar />);
      const navElement = screen.getByRole("navigation");
      expect(navElement).toBeInTheDocument();
    });

    it("checking navigation role", async () => {
      render(<MockNavbar />);
      const navElement = screen.getByRole("navigation");
      expect(navElement).toContainHTML("h1");
    });
  });
});
