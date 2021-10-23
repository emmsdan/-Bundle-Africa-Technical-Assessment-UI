import React from "react";
import "./invoice.scss";
export default function InvoiceFooter(): React.ReactElement {
  const randomId = String(Math.random() + 2).split(".")[1];
  return (
    <footer className="footer">
      <a href="http://emmsdan.com">www.bundle.africa/help</a>
      <h6>Invoice ID: {randomId}</h6>
    </footer>
  );
}
