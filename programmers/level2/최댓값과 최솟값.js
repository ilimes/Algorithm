function solution(s) {
  const arr = s.split(" ");
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  var answer = minValue + " " + maxValue;
  return answer;
}
