import React from "react";
import { render, screen } from "@testing-library/react";
import Upload from "./Upload";

describe("FileUploadField", () => {
  const { container, getByText } = render(<Upload />);

  it("should render a label and a file input field", () => {
    expect(container.querySelector('input[type="file"]')).toBeTruthy();
    expect(container.textContent).toBe('Select ".csv" file to upload *');
  });

  // it('should attach the label to the input field', () => {
  //     const id = 'fileUpload';
  //     expect(component.find('label').prop('htmlFor')).toBe(id);
  //     expect(component.find('input').prop('id')).toBe(id);
  // });
  //
  // it('should not show preview if no image has been selected', () => {
  //     expect(component.find('img')).not.toExist();
  // });
});
