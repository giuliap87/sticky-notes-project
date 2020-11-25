function formatDate(string) {
  let arr = Array.from(string);
  arr.splice(4, 0, "-");
  arr.splice(7, 0, "-");
  arr.splice(10, 0, " ");
  arr.splice(13, 0, ":");
  arr.splice(16, 0, ":" );
  return arr.join("");
}

export {formatDate};
