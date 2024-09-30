import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name in contact component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input elements in contact component", () => {
    render(<Contact />);
    // the getAllByRole('textbox) checkst the contact page to see the number of input elements and return all of them in the form of a react object.
    const inputBoxes = screen.getAllByRole("textbox");

    // in this case the inputBoxes are two, so we assert to see whether two input boxes indeed were rendered.
    expect(inputBoxes.length).toBe(2);
  });
})