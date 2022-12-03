function solution(numbers) {
  let arr = [];
  numbers.map((e, index) => {
    for (let i = 0; i < numbers.length; i++) {
      if (i != index) arr.push(e + numbers[i]);
    }
  });

  const set = new Set(arr);
  var answer = [...set].sort((a, b) => a - b);
  return answer;
}
