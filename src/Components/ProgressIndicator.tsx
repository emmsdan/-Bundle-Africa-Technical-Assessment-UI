import React from "react";
import "./progress-indicator.scss";
export default function ProgressIndicator({
  percentage,
}: {
  percentage: number;
}) {
  return <div className="progress" style={{ width: percentage + "%" }} />;
}

export const RandomLoader = ({ length }: { length: number }) => {
  return (
    <div className={"indicator"}>
      {Array.from(Array(length).keys()).map((ind) => (
        <div key={ind} />
      ))}
    </div>
  );
};
