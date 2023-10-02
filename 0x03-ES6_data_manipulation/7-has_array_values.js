export default function hasValuesFromArray(set, list) {
  for (const i of list) {
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}