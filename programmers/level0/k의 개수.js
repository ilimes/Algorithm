function solution(i, j, k) {
  let cnt = 0;
  for (let a = i; a <= j; a++) {
    const numArr = String(a).split("");
    numArr.filter((e) => e.indexOf(k) != -1 && cnt++);
  }
  return cnt;
}
