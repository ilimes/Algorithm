function solution(n) {
  let answer = 0;
  const calc = String(n)
    .split("")
    .map((e) => (answer = Number(e) + answer));
  return answer;
}
