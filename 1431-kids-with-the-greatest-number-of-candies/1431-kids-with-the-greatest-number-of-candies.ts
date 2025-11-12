function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // candies 에 담긴 값 중 가장 큰 값을 찾는다.
    let maxValue = Math.max(...candies);

    // candies 을 확인하여 요소(kid)가 extraCandies의 값을 추가적으로 가졌을때
    // 본래 candies의 가장 큰 값보다 크거나 같은지 비교하여 결과값을 도출해낸다.
    let result = candies.map((num) => num + extraCandies >= maxValue);

    return result;
};