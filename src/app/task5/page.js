export default function page() {
  function findPairs(arr, targetValue) {
    const result = [];
    const seen = new Set();

    for (let num of arr) {
      const complement = targetValue - num;

      if (seen.has(complement) && !seen.has(num)) {
        result.push([num, complement]);
        seen.add(num);
      }

      seen.add(num);
    }

    return result;
  }

  // Example usage:
  const arr = [1, 7, 5, 10, 8, 5, 2, 4, 3, , 4];
  const pairs = findPairs(arr, 7);

  console.log(pairs);
}
