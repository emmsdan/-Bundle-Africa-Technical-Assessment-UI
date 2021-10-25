import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceHeader from "./InvoiceHeader";

describe("InvoiceHeader.tsx", () => {
  it("should render Component", () => {
    render(<InvoiceHeader />);
    expect(screen.getByText(/Customer Voucher/)).toBeTruthy();
  });

  it("should render bundle logo", () => {
    const Component = render(<InvoiceHeader  />);
    expect(Component.getByRole(/logo/)).toBeTruthy();
  });
});
