function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;

  let index = -1;
  // เริ่มเขียนโค้ดตรงนี้จ้า
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (students[middle] === searchStudent) {
      index = middle;
      return index;
    } else if (students[middle] < searchStudent) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return index;
}

// ตอบคำถามตรงนี้จ้า
/*	binary search
	big O = O(log N)
	เพราะ มันตัดงานออกทีละครึ่งนึง เลยไว 
*/

const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

const searchStudent = "John";
console.log(findStudentIndex(students, searchStudent));
console.log(findStudentIndex(students, "DF Park love dog, not cat."));
