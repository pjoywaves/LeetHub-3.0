function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    // 새로운 꽃을 심을 수 있는 공간 count
    let count: number = 0;

    // 정원에 길이를 돌며 자기 자신을 기준으로 왼쪽(left), 오른쪽(right)값을 
    // 비교하여 심을 수 있는지 확인하고 
    // 가능하면 가능한 공간 count++하고
    // 그 값을 1(not empty) 상태로 바꾸어 다음 for 문을 실행한다.
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