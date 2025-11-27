function largestAltitude(gain: number[]): number {
  let start: number = 0;
  let sum = 0;
  let arr: number[] = [];

  for (let i = 0; i < gain.length; i++) {
    arr.push((sum += gain[i]));
  }

  return Math.max(start, ...arr);
}