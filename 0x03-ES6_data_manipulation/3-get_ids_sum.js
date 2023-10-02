export default function getStudentIdsSum(students) {
  return students.reduce((sum, stud) => sum + stud.id, 0);
}