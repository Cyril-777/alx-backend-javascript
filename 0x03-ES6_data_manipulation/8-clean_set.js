export default function cleanSet(set, startString) {
  return [...set]
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''))
    .join('-');
}
