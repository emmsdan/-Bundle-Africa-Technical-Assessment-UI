import React from "react";
import { useHistory} from 'react-router-dom'
import "./upload.scss";
import ProgressIndicator, {
  RandomLoader,
} from "../Components/ProgressIndicator";
import useAxios from "../hooks/useAxios";
import {VoucherContext} from "../context/customer";
export default function Upload() {
  const [loading, setLoading] = React.useState(false);
  const [width, setWidth] = React.useState(10);
  const history = useHistory()
  const { updateVoucher } = React.useContext(VoucherContext);

  const post = useAxios({
    url: "reward",
    method: "post",
    onUploadProgress: ({ total, loaded }) => {
      let percentCompleted = Math.floor((loaded / total) * 100);
      setWidth(percentCompleted);
    },
  });
  const SubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const fileList = event.target.files;
      if (!fileList) return;
      setLoading(true);
      const data = new FormData();
      data.append("file", fileList[0], fileList[0].name);
      const { response, error } = await post(data);
      updateVoucher(response);
      // @ts-ignore
      if (error || !response || response.data.length <= 0) {
        // @ts-ignore
        console.log(error || response || response.data.length)
        alert('CSV file seems to be empty')
        return
      }
      history.push('/invoice')
      // setLoading(false)
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <label className="upload-container" onClick={(e) => "from"}>
      {!loading ? (
        <div className="input" role={"button"}>
          <div>
            Select ".csv" file to upload <sup title="required">*</sup>
          </div>
          <input
            type="file"
            accept="text/csv,application/csv,.csv"
            onChange={SubmitFile}
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
