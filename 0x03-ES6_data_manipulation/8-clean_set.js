export default function cleanSet(set, startString) {
  const filteredString = [...set].filter((value) => value.startsWith(startString));
  const cleanString = filteredString.map((value) => value.substring(startString.length)).join('-');
  return cleanString;
}
