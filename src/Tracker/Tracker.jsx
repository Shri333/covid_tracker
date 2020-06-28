import React from "react";
import CountUp from "react-countup";
import styles from "./Tracker.module.css";

export function Tracker({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.center}>
      <h1>
        Infected:{" "}
        <CountUp
          start={0}
          end={confirmed.value}
          duration={1}
          separator=","
          className={styles.red}
        />
      </h1>
      <h1>
        Recovered:{" "}
        <CountUp
          start={0}
          end={recovered.value}
          duration={1}
          separator=","
          className={styles.green}
        />
      </h1>
      <h1>
        Deaths:{" "}
        <CountUp
          start={0}
          end={deaths.value}
          duration={1}
          separator=","
          className={styles.grey}
        />
      </h1>
      <h1>{new Date(lastUpdate).toDateString()}</h1>
    </div>
  );
}
