import { format } from "date-fns";
const DATE_FORMAT = "yyy-mm-dd HH:MM:SS";

function formatDate(string) {
  return format(string, DATE_FORMAT);
}

export { formatDate };
