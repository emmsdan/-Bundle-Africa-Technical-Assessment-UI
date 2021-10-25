import React from "react";
import "./invoice.scss";
export default function InvoiceFooter({ id}: { id?: number }): React.ReactElement {
  const randomId = id || String(Math.random() + 2).split(".")[1];
  return (
    <footer className="footer">
      <a href="http://emmsdan.com">www.bundle.africa/help</a>
      <h6 role={'status'}>Invoice ID: {randomId}</h6>
    </footer>
  );
}
