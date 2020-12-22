import { format } from "date-fns";
const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

function formatDate(string) {
  return format(string, DATE_FORMAT);
}

export { formatDate };
