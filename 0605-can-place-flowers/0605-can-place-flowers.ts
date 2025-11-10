function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count: number = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let left = flowerbed[i - 1] ?? 0;
    let right = flowerbed[i + 1] ?? 0;

    if (flowerbed[i] === 0 && left === 0 && right === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};