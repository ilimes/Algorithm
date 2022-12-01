function solution(array, height) {
  let cnt = 0;
  array.map((e) => e > height && cnt++);
  return cnt;
}
