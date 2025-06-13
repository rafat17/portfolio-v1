import moment from "moment";

export const convertToDateFormat = (
  date: string | null,
  format: string = "MMMM YYYY"
) => {
  if (date) {
    return moment(date).format(format);
  }

  return null;
};
