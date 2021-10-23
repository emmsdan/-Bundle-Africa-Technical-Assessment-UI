import React from "react";
import "./invoice.scss";
export default function InvoiceHeader() {
  return (
    <header className="header">
      <img
        src="https://bundle-static-contents.s3.amazonaws.com/images/Bundle-logo.svg"
        alt={"Bundle Africa logo"}
      />
      <h3>Customer Voucher</h3>
    </header>
  );
}
