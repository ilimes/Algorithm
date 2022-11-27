function solution(angle) {
  var answer = angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1;
  return answer;
}
