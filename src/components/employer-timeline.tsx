import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { format } from "date-fns";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

type TimePointProp = {
  from?: string;
  to?: string;
  connector?: boolean;
  selected?: { get: boolean; set: (value: boolean) => void };
};

function TimePoint({ from, to, connector, selected }: TimePointProp) {
  return (
    <TimelineItem>
      {from && (
        <TimelineOppositeContent sx={{ fontSize: "1.6rem" }}>
          {from}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        {selected?.get ? <TimelineDot color="primary" /> : <TimelineDot />}
        {connector &&
          (selected?.get ? (
            <TimelineConnector color="primary" />
          ) : (
            <TimelineConnector />
          ))}
      </TimelineSeparator>
      {to && (
        <TimelineContent sx={{ fontSize: "1.6rem" }}>{to}</TimelineContent>
      )}
    </TimelineItem>
  );
}

export default function EmployerTimeline() {
  const years = ["2019", "2020", "2021", format(new Date(), "yyyy")];

  const [selectedYear, setSelectedYear] = useState<boolean[]>(
    Array(years.length).map((s) => false)
  );

  const renderTimePoints = useCallback(() => {
    const handleSetSelected = (value: boolean, index: number) => {
      const arr = selectedYear;
      arr.splice(index, 1, value);

      setSelectedYear(arr);
    };

    return years.map((y, i) =>
      i < years.length - 1 ? (
        <TimePoint
          key={y + "-endpoint"}
          to={y}
          connector
          selected={{
            get: selectedYear[i],
            set: (value: boolean) => {
              handleSetSelected(value, i);
            },
          }}
        />
      ) : (
        <TimePoint
          key={y + "-endpoint"}
          to={y}
          selected={{
            get: selectedYear[i],
            set: (value: boolean) => {
              handleSetSelected(value, i);
            },
          }}
        />
      )
    );
  }, [years, selectedYear]);

  return (
    <Timeline
      sx={{
        color: "white",
        [`& .${timelineOppositeContentClasses.root}`]: {
          color: "white",
          flex: 0,
          padding: 0,
        },
      }}
    >
      {renderTimePoints()}
    </Timeline>
  );
}
