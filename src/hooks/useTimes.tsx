import { differenceInSeconds, fromUnixTime } from "date-fns";

export const getTime = (time: number) => {
  const result = fromUnixTime(time);

  const now = new Date();

  const seconds = differenceInSeconds(new Date(now), new Date(result));

  if (seconds < 60) {
    return `${seconds} seconds`;
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minutes`;
  }

  if (minutes >= 60) {
    return `${Math.floor(minutes / 60)} hours`;
  }
};
