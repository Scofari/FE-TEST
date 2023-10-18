function findBestMatch(target, numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let bestMatch = numbers[0];
    let minDifference = Math.abs(target - bestMatch);

    for (let i = 1; i < numbers.length; i++) {
        const currentDifference = Math.abs(target - numbers[i]);
        if (currentDifference < minDifference) {
            bestMatch = numbers[i];
            minDifference = currentDifference;
        }
    }

    return bestMatch;
}

const targetNumber = 22;
const numberArray = [10, 15, 18, 24, 38];
const bestMatch = findBestMatch(targetNumber, numberArray);
