function solution(s) {
  const arr = s.split("");
  const half = s.length / 2;
  let answer = "";
  if (s.length % 2 === 0) {
    answer = arr[half - 1] + arr[half];
  } else {
    answer = arr[Math.ceil(half) - 1];
  }
  return answer;
}
