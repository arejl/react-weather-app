let dayjs = require("dayjs");

export const weekDay = (dateString) => {
  let date = new Date(dayjs(dateString).format());
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
};