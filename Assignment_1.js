  function findMax(numbers){
    let max = numbers[0];
    numbers.forEach(num => {
      if(num>max){
        max = num
      }
    });
    return max
  };
  numbers = [0,1,-1,-5,-7,-4,-3,7];
  console.log(findMax(numbers));
