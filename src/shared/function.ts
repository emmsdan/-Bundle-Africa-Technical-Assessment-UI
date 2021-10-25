import React from "react";
import $http from "./$http";

export const SubmitFile = (progress: (progress: number) => void) => (
  loadingState: (state: boolean) => void,
  responseCallback: (err: Error | null, data: any) => void
) => async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
    const fileList = event.target.files;
    if (!fileList) return;
    loadingState(true);
    const data = new FormData();
    data.append("file", fileList[0], fileList[0].name);
    const response = await $http.post("reward", data, {
      onUploadProgress: ({ total, loaded }) => {
        let percentCompleted = Math.floor((loaded / total) * 100);
        progress(percentCompleted);
      },
    });
    // @ts-ignore
    if (response.status > 202 || response.data.data.length <= 0) {
      responseCallback(Error("CSV file seems to be empty"), null);
      alert("CSV file seems to be empty");
      loadingState(false);
      return;
    }
    responseCallback(null, response);
  } catch (error: any) {
    responseCallback(error, null);
  }
  loadingState(false);
};
