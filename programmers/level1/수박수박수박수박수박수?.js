function solution(n) {
  let [str, answer] = ["", ""];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      str = "수";
    } else {
      str = "박";
    }
    answer = answer.concat(str);
  }
  return answer;
}
