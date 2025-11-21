function longestOnes(nums: number[], k: number): number {
  let result: number = 0;

  let left: number = 0;

  let zeroCount: number = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    if (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}