// Post formating helper

export function formatSentences(str) {
  const sentencesArr = str.split(/\r\n|\r|\n/g);

  const sentencesFormated = sentencesArr.map(s => {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}. `
  });

  return sentencesFormated;
}

/*
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
}
*/