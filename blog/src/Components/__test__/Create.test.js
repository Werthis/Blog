import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Create from "../Create";

it("checking first label text", async () => {
  render(<Create />);
  const firstLabelElement = screen.getByText(/Create new app/i);
  expect(firstLabelElement).toBeInTheDocument();
});

it("checking second label text", async () => {
  render(<Create />);
  const secondLabelElement = screen.getByText(/App title:/i);
  expect(secondLabelElement).toBeInTheDocument();
});

it("checking button role and value", () => {
  render(<Create />);
  const buttonElement = screen.getByRole("button", { value: /Add App/i });
  expect(buttonElement).toBeInTheDocument();
});

it("checking option role and name", () => {
  render(<Create />);
  const optionElement = screen.getByRole("option", { name: "Werthis" });
  expect(optionElement).toBeInTheDocument();
});

// FIND BY
// (potrzebuje await)

it("find by text first label", async () => {
  render(<Create />);
  const firstLabelElement = await screen.findByText(/Create new app/i);
  expect(firstLabelElement).toBeInTheDocument();
});
