import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceTable from "./InvoiceTable";

describe("InvoiceTable.tsx", () => {
  it("should render table header thead", () => {
    render(<InvoiceTable headers={['N/O', 'Some Heading']} options={[]} />);
    expect(screen.getByText(/N\/O/)).toBeTruthy();
    expect(screen.getByText(/Some Heading/)).toBeTruthy();
  });

  it("should render table body tbody", () => {
    render(<InvoiceTable headers={['Head 1']} options={[{
      customerID: 34567,
      customerFirstName: 'Emms',
      orderValue: 345678987,
      validity: 1000,
      price: 50000
    }]} />);
    expect(screen.getByText(/34567/)).toBeTruthy();
    expect(screen.getByText(/Emms/)).toBeTruthy();
    expect(screen.getByText(/345,678,987/)).toBeTruthy();
    expect(screen.getByText(/1000/)).toBeTruthy();
    expect(screen.getByText(/50,000/)).toBeTruthy();
  });

  it("should render N/A if no customer name", () => {
    render(<InvoiceTable headers={['Head 1']} options={[{
      customerID: 34567,
      customerFirstName: '',
      orderValue: 345678987,
      validity: 1000,
      price: 50000
    }]} />);
    expect(screen.getByText(/34567/)).toBeTruthy();
    expect(screen.getByText(/N\/A/)).toBeTruthy();
    expect(screen.getByText(/345,678,987/)).toBeTruthy();
    expect(screen.getByText(/1000/)).toBeTruthy();
    expect(screen.getByText(/50,000/)).toBeTruthy();
  });

});
