function solution(num_list) {
  let [oddCnt, evenCnt] = [0, 0];
  num_list.map((e) => (e % 2 === 0 ? evenCnt++ : oddCnt++));
  return [evenCnt, oddCnt];
}
