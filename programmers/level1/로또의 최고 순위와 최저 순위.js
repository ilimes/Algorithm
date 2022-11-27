function solution(lottos, win_nums) {
  const zeroCnt = lottos.reduce((acc, cur) => acc + (cur === 0 && 1), 0);
  const lowCnt = lottos.reduce(
    (acc, cur) => acc + (win_nums.includes(cur) && 1),
    0
  );

  const answer = [
    lowCnt + zeroCnt < 2 ? 6 : 7 - (lowCnt + zeroCnt),
    lowCnt < 2 ? 6 : 7 - lowCnt,
  ];
  return answer;
}
