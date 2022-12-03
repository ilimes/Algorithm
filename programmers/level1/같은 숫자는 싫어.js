function solution(arr) {
  let answer = arr;
  let newArr = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== answer[i + 1]) {
      newArr.push(answer[i]);
    }
  }

  return newArr;
}
