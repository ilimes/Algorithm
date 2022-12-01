function solution(s) {
  let [pCnt, yCnt] = [0, 0];
  s.toLowerCase()
    .split("")
    .map((e) => (e === "p" ? pCnt++ : e === "y" ? yCnt++ : ""));

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return pCnt === yCnt ? true : false;
}
