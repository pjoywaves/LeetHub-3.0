function longestSubarray(nums: number[]): number {
  let result: number = 0;
  let left: number = 0;
  let count: number = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      count++;
    }
    if (count > 1) {
      if (nums[left] === 0) count--;
      left++;
    }

    result = Math.max(result, right - left);
  }

  return result;
};