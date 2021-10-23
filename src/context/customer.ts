import { createContext } from "react";

export const VoucherContext = createContext({
  vouchers: {
    data: [],
    meta: {
      totalAmount: 0,
      totalValidity: 0,
      totalOrderValue: 0,
    },
  },
  updateVoucher: (response: unknown) => {},
});
