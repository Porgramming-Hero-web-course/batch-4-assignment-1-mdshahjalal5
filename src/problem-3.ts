//w: 07/11/2024 11:23 AM Thu GMT+6 Sharifpur, Gazipur, Dhaka
// problem-3.ts

type CountOccurrence = (sentence: string, word: string) => number;

const countWordOccurrences: CountOccurrence = function (
  sentence,
  word,
): number {
  const sentencedLowerd: string = sentence.toLowerCase();
  const wordLowerd: string = word.toLowerCase();

  const words = sentencedLowerd.split(" ");
  let count = 0;

  words.forEach((w) => {
    if (w === wordLowerd) {
      count = count + 1;
    }
  });

  return count;
};

const result = countWordOccurrences(
  "we love our country Bangladesh. As a country& we love it. so we live in a country.",
  "country",
);
console.log(result, "result"); // Output: 4
