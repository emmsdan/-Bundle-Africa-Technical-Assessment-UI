import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Invoice from "./Views/Invoice";
import Upload from "./Views/Upload";
import { VoucherContext } from "./context/customer";

function App(): React.ReactElement {
  const [vouchers, updateVoucher] = React.useState<{ data: any[]; meta: {} }>({
    data: [],
    meta: {},
  });
  const value: any = React.useMemo(() => ({ vouchers, updateVoucher }), [
    vouchers,
  ]);

  return (
    <VoucherContext.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Upload} />
          <Route path="/invoice" component={Invoice} />
        </Switch>
      </BrowserRouter>
    </VoucherContext.Provider>
  );
}

export default App;
