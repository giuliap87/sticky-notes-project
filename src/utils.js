import { format } from "date-fns";
import { parseISO } from 'date-fns'
const DATE_FORMAT = "yyy-MM-dd HH:mm:ss";

function formatDate(string) {
  return format(parseISO(string), DATE_FORMAT);
}


function formatForSorting(string){
  return format(parseISO(string), "yyyMMddHHmmSss" )
}

export { formatDate, formatForSorting };

