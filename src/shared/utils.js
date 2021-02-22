// Post formating helper

export function formatSentences(str) {
  const sentencesArr = str.split(/\r\n|\r|\n/g);

  const sentencesFormated = sentencesArr.map(s => {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}. `
  });

  return sentencesFormated;
}