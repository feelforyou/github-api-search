import React from "react";
import Countdown from "./Countdown";

const HttpLimitErrorMessage = () => {
  return (
    <div className="httplimit-msg alert-danger">
      <p>
        You have hit the limit of http requests,
        <br /> please wait
        <Countdown /> sec to search again.
      </p>
    </div>
  );
};

export default HttpLimitErrorMessage;
