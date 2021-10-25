import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceFooter from "./InvoiceFooter";

describe("InvoiceFooter.tsx", () => {
  it("should render Component with url", () => {
    render(<InvoiceFooter />);
    expect(screen.getByText('www.bundle.africa/help')).toBeTruthy();
  });

  it("should render invoice id", () => {
    const Component = render(<InvoiceFooter id={987656} />);
    expect(Component.getByText(/Invoice ID: 987656/)).toBeTruthy();
  });
});
