function solution(a, b) {
  if (a === b) {
    return a;
  }
  let answer = 0;
  if (a > b) {
    for (let i = b; i < a + 1; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i < b + 1; i++) {
      answer += i;
    }
  }

  return answer;
}
