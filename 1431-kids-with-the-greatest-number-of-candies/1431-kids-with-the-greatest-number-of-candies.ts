function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxValue = Math.max(...candies);

  let result = candies.map((num) => num + extraCandies >= maxValue);
  return result;
};