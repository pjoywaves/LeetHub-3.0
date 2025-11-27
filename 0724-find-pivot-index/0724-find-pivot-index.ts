function pivotIndex(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.reduce((arr, cur) => arr + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    left = i !== 0 ? left + nums[i - 1] : 0;
    right -= nums[i];

    if (left === right) return i;
  }

  return -1;
};