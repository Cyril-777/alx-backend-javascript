export default function cleanSet(set, startString) {
  return [...set]
  .filter((value) => (value !== undefined ? value.startsWith(string) : ''))
  .map((value) => (value !== undefined ? value.slice(string.length) : ''))
  .join('-');
}
