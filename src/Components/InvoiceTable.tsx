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
export default function InvoiceTable({ headers, options }: Props) {
  return (
    <table>
      <tr>
        {headers.map((title) => (
          <th>{title}</th>
        ))}
      </tr>
      {options.map((row) => (
        <tr>
          <td>{row.customerID}</td>
          <td>{row.customerFirstName}</td>
          <td>
            {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
              row.orderValue
            )}
          </td>
          <td>{row.validity}</td>
          <td>
            {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
              row.price
            )}
          </td>
        </tr>
      ))}
    </table>
  );
}
