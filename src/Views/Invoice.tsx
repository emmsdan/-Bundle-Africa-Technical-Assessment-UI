import React from "react";
import InvoiceHeader from "../Components/InvoiceHeader";
import "./invoice.scss";
import InvoiceFooter from "../Components/InvoiceFooter";
import InvoiceTable from "../Components/InvoiceTable";
export default function Invoice() {
  const headers = [
    "No",
    "Customer Name",
    "Order Value (N)",
    "Validity",
    "Price (N)",
  ];
  const options = [
    {
      customerID: 1,
      customerFirstName: "Lanre",
      orderValue: 17200,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
    {
      customerID: 2,
      customerFirstName: "john",
      orderValue: 11454,
      validity: 10,
      price: 1000,
    },
  ];

  const data = {
    totalAmount: 1234,
    totalValidity: 30,
    totalOrderValue: 45678,
  };
  return (
    <>
      <div className="container">
        <aside className="aside">
          <section className="info-box">
            <div className="receipt">
              Voucher for <br />
              <span>Bundle Africa</span>
            </div>
            <br />
            <br />
            <div className="entry">
              <i className="icon-wallet" aria-hidden="true"></i>
              <p>
                Total Voucher Amount:
                <br />
                <span>
                  N
                  {Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(data.totalAmount)}
                </span>
              </p>
            </div>
            <div className="entry">
              <i className="icon-calendar" aria-hidden="true"></i>
              <p>
                Total Validity:
                <br />
                <span>{data.totalValidity} days</span>
              </p>
            </div>
            <div className="entry">
              <i className="icon-wallet" aria-hidden="true"></i>
              <p>
                Total Customer Order Value:
                <br />
                <span>
                  N
                  {Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(data.totalOrderValue)}
                </span>
              </p>
            </div>
          </section>
        </aside>
        <main className="main">
          <InvoiceHeader />

          <section className="content">
            <InvoiceTable headers={headers} options={options} />
          </section>

          <InvoiceFooter />
        </main>
      </div>
    </>
  );
}
