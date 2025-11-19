function findMaxAverage(nums: number[], k: number): number {
  let start: number = 0;
  let end: number = start + k;
  let max: number = -Infinity;

  while (end <= nums.length) {
    let sum: number = 0;
    for (let i = start; i < end; i++) {
      sum += nums[i];
    }
    if (sum > max) max = sum;

    start++;
    end++;
  }
  return max / k;
};