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
        <b><CountUp
          start={0}
          end={confirmed.value}
          duration={1}
          separator=","
          className={styles.infected}
        /></b>
      </h1>
      <h1>
        Recovered:{" "}
        <b><CountUp
          start={0}
          end={recovered.value}
          duration={1}
          separator=","
          className={styles.recovered}
        /></b>
      </h1>
      <h1>
      Dead:{" "}
        <b><CountUp
          start={0}
          end={deaths.value}
          duration={1}
          separator=","
          className={styles.dead}
        /></b>
      </h1>
      <h1 className={styles.color}>{new Date(lastUpdate).toDateString()}</h1>
    </div>
  );
}
