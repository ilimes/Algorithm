function solution(s) {
  const eNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;
  eNum.map((e, i) => {
    const arr = answer.split(e);
    answer = arr.join(i);
  });

  return Number(answer);
}
