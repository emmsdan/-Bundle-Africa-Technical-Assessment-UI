import React from "react";
import InvoiceHeader from "../Components/InvoiceHeader";
import "./invoice.scss";
import InvoiceFooter from "../Components/InvoiceFooter";
import InvoiceTable from "../Components/InvoiceTable";
import { VoucherContext } from "../context/customer";
import { useHistory } from "react-router-dom";
export default function Invoice(): React.ReactElement {
  const { vouchers } = React.useContext(VoucherContext);
  const history = useHistory();

  const headers = [
    "No",
    "Customer Name",
    "Order Value (N)",
    "Validity",
    "Price (N)",
  ];

  React.useEffect(() => {
    if (!vouchers || vouchers.data.length <= 0) {
      history.push("/");
    }
  }, [vouchers, history]);
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
                  {Intl.NumberFormat("en", {}).format(
                    vouchers.meta.totalAmount
                  )}
                </span>
              </p>
            </div>
            <div className="entry">
              <i className="icon-calendar" aria-hidden="true"></i>
              <p>
                Total Validity:
                <br />
                <span>
                  {Intl.NumberFormat("en", {}).format(
                    vouchers.meta.totalValidity
                  )}{" "}
                  days
                </span>
              </p>
            </div>
            <div className="entry">
              <i className="icon-wallet" aria-hidden="true"></i>
              <p>
                Total Customer Order Value:
                <br />
                <span>
                  N
                  {Intl.NumberFormat("en", {}).format(
                    vouchers.meta.totalOrderValue
                  )}
                </span>
              </p>
            </div>
          </section>
        </aside>
        <main className="main">
          <InvoiceHeader />

          <section className="content">
            <InvoiceTable headers={headers} options={vouchers.data} />
          </section>

          <InvoiceFooter />
        </main>
      </div>
    </>
  );
}
