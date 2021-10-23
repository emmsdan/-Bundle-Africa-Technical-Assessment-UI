import React from "react";
import "./invoice.scss";

type Options = {
  customerID: number;
  customerFirstName: string;
  orderValue: number;
  validity: number;
  price: number;
};
type Props = {
  headers: string[];
  options: Options[];
};
export default function InvoiceTable({
  headers,
  options,
}: Props): React.ReactElement {
  return (
    <table>
      <thead>
      <tr>
        {headers.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {options.map((row, ind) => (
        <tr key={row.customerID + row.customerFirstName + ind}>
          <td>{row.customerID || ind + 1}</td>
          <td>{row.customerFirstName || "N/A"}</td>
          <td>{Intl.NumberFormat("en", {}).format(row.orderValue)}</td>
          <td>{row.validity}</td>
          <td>{Intl.NumberFormat("en", {}).format(row.price)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
