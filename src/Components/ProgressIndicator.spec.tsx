import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressIndicator, { RandomLoader } from "./ProgressIndicator";

describe("ProgressIndicator.tsx", () => {
  it("should render progress indicator", () => {
    const comp = render(<ProgressIndicator percentage={50} />);
    expect(comp.container.querySelector('.progress[style="width: 50%;"]')).toBeTruthy();
  });

  it("should render progress indicator with 10% width", () => {
    const comp = render(<ProgressIndicator percentage={10} />);
    expect(comp.container.querySelector('.progress[style="width: 10%;"]')).toBeTruthy();
  });
});

describe("RandomLoader.tsx", () => {
  it("should render table header thead", () => {
    const comp = render(<RandomLoader length={5} />);
    expect(comp.container.childNodes.length).toEqual(1);
    expect(comp.container.firstChild?.childNodes.length).toStrictEqual(5);
  });
});
