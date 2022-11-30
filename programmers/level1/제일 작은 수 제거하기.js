function solution(arr) {
  var answer =
    arr.length != 1 ? arr.filter((e) => e != Math.min(...arr)) : [-1];
  return answer;
}
