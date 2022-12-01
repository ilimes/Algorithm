function solution(array, n) {
  let cnt = 0;
  array.map((e) => e == n && cnt++);
  return cnt;
}
