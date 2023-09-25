export default function createIteratorObject(report) {
  const employeesList = [];
  for (const item of Object.values(report.allEmployees)) {
    employeesList.push(...item);
  }

  return employeesList;
}
