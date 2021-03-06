import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Upload from "./Upload";

describe("Upload.tsx", () => {
  it("should render Component", () => {
    const { container } = render(<Upload />);
    const data = container.querySelector("h2");
    expect(data).toBeTruthy();
    expect(data?.textContent).toBe("Assignment 2: Rewarder");
  });

  it("should render a label and a file input field", () => {
    const { container, getByText } = render(<Upload />);
    expect(container.querySelector('input[type="file"]')).toBeTruthy();
    expect(getByText('Select ".csv" file to upload')).toBeTruthy();
  });
});
