import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Invoice from "./Invoice";

describe("Invoice.tsx", () => {
  it("should render Component", () => {
    const { container } = render(<Invoice />);
    const data = container.querySelector("h2");
    expect(data).toBeTruthy();
    expect(data?.textContent).toBe("Assignment 2: Rewarder");
  });

  it("should render a label and a file input field", () => {
    const { container, getByText } = render(<Invoice />);
    expect(container.querySelector('input[type="file"]')).toBeTruthy();
    expect(getByText('Select ".csv" file to upload')).toBeTruthy();
  });
});
