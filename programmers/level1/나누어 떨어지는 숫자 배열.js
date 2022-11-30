function solution(arr, divisor) {
  const array = arr.filter((e) => e % divisor === 0);
  var answer = array.length === 0 ? [-1] : array.sort((a, b) => a - b);
  return answer;
}
