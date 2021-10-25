import React from "react";
import { useHistory } from "react-router-dom";
import "./upload.scss";
import ProgressIndicator, {
  RandomLoader,
} from "../Components/ProgressIndicator";
import { VoucherContext } from "../context/customer";
import { SubmitFile } from "../shared/function";
export default function Upload(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [width, setWidth] = React.useState(10);
  const history = useHistory();
  const { updateVoucher } = React.useContext(VoucherContext);

  const fileUploadHandler = SubmitFile(setWidth)(
    setLoading,
    (err, response) => {
      if (err) {
        return;
      }
      updateVoucher(response.data);
      history.push("/invoice");
    }
  );
  return (
    <label className="upload-container" role={'presentation'}>
      <h2>Assignment 2: Rewarder</h2>
      {!loading ? (
        <div className="input" role={"button"}>
          <div>Select ".csv" file to upload</div>
          <input
            type="file"
            accept="text/csv,application/csv,.csv"
            onChange={fileUploadHandler}
            required
          />
        </div>
      ) : (
        <>
          <div>
            Please, wait, we are processing your data.
            <ProgressIndicator percentage={width} />
          </div>
          <RandomLoader length={10} />
        </>
      )}
    </label>
  );
}
