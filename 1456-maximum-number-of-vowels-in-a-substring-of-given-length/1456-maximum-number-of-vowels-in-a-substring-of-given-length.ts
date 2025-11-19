function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let count: number = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) count++;
  }

  let max: number = count;

  for (let i = 1; i < s.length; i++) {
    if (vowels.includes(s[i - 1])) count--;
    if (vowels.includes(s[i + k - 1])) count++;
    max = Math.max(max, count);
    if(max === k) break;
  }

  return max;
};