import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Create from "../Create";

describe("Create", () => {
  describe("Text check", () => {
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

    // FIND BY
    // (potrzebuje await)

    it("find by text first label", async () => {
      render(<Create />);
      const findByElement = await screen.findByText(/Create new app/i);
      expect(findByElement).toBeInTheDocument();
    });

    // QUERY BY
    // (not.toBeInTheDocument)

    it("not to be in", async () => {
      render(<Create />);
      const notToBeElement = screen.queryByText(/Hakuna Matata/i);
      expect(notToBeElement).not.toBeInTheDocument();
    });
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

  // getAllBy

  it("not to be in", async () => {
    render(<Create />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(2);
  });

  it("checking input value", async () => {
    render(<Create />);
    const inputElement = screen.getByTestId("titleInput");
    expect(inputElement.value).toBe("");
  });

  it("checking option value and text", async () => {
    render(<Create />);
    const optionElement = screen.getByRole("option", { name: "Werthis" });
    expect(optionElement.value).toBe("Werthis");
    expect(optionElement.textContent).toBe("Werthis");
    // niepolecane robienie 2 assertów w jednym teście
  });
});

describe("Input functionality", () => {
  it("checking placeholder text", async () => {
    render(<Create />);
    const inputElement = screen.getByPlaceholderText(/Add a title.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("checking adding text event", async () => {
    render(<Create />);
    const inputElement = screen.getByPlaceholderText(/Add a title.../i);
    fireEvent.change(inputElement, { target: { value: "New Article" } });
    expect(inputElement.value).toBe("New Article");
  });

  it("checking apply event", async () => {
    render(<Create />);
    const inputTitleElement = screen.getByPlaceholderText(/Add a title.../i);
    const inputBodyElement = screen.getByPlaceholderText(/Add text.../i);
    const buttonSubmitElement = screen.getByRole("button", {
      name: /Add App/i,
    });
    fireEvent.change(inputTitleElement, { target: { value: "New Article" } });
    fireEvent.change(inputBodyElement, {
      target: {
        value:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, amet facilis? Similique corporis ducimus explicabo eum sint delectus praesentium cum aut. Reprehenderit similique saepe, beatae iusto molestias omnis amet nobis.",
      },
    });
    fireEvent.click(buttonSubmitElement);
    expect(inputTitleElement.value).toBe("New Article");
    expect(inputBodyElement.value).toBe(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, amet facilis? Similique corporis ducimus explicabo eum sint delectus praesentium cum aut. Reprehenderit similique saepe, beatae iusto molestias omnis amet nobis."
    );
  });
});

// describe("Create integration", () => {
//   it("checking apply event", async () => {
//     render(<Create />);
//     const inputTitleElement = screen.getByPlaceholderText(/Add a title.../i);
//     const inputBodyElement = screen.getByPlaceholderText(/Add text.../i);
//     const buttonSubmitElement = screen.getByRole("button", {
//       name: /Add App/i,
//     });
//     fireEvent.change(inputTitleElement, { target: { value: "New Article" } });
//     fireEvent.change(inputBodyElement, {
//       target: {
//         value:
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, amet facilis? Similique corporis ducimus explicabo eum sint delectus praesentium cum aut. Reprehenderit similique saepe, beatae iusto molestias omnis amet nobis.",
//       },
//     });
//     fireEvent.click(buttonSubmitElement);
//     expect(inputTitleElement.value).toBe("New Article");
//     expect(inputBodyElement.value).toBe(
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, amet facilis? Similique corporis ducimus explicabo eum sint delectus praesentium cum aut. Reprehenderit similique saepe, beatae iusto molestias omnis amet nobis."
//     );
//   });

// })
