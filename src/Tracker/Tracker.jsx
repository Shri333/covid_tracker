import React from "react";
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

export function Tracker({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div>
      <Typography variant="h3">
        Infected:{" "}
        <CountUp start={0} end={confirmed.value} duration={1} separator="," />
      </Typography>
      <Typography variant="h3">
        Recovered:{" "}
        <CountUp start={0} end={recovered.value} duration={1} separator="," />
      </Typography>
      <Typography variant="h3">
        Deaths:{" "}
        <CountUp start={0} end={deaths.value} duration={1} separator="," />
      </Typography>
      <Typography variant="h3">
        Date: {new Date(lastUpdate).toDateString()}
      </Typography>
    </div>
  );
}
