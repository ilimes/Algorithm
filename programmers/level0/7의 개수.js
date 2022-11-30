function solution(array) {
  let cnt = 0;
  array.map((e) => {
    String(e)
      .split("")
      .map((e) => e === "7" && cnt++);
  });
  return cnt;
}
