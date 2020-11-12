function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  function format(el) {
    return el < 10 ? "0" + el : el;
  }

  return `${year}- ${format(month)}- ${format(day)}, ${format(hours)}:${format(
    minutes
  )}`;
}

export {getDate};
