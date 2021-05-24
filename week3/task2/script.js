const sentenceList = [
    'hello world oke lorem ipsum dolor.',
    'Aku mau belajar react.js.',
    'Hey kamu mau kemana?.',
    'Kapan kita jalan bareng lagi.',
    'Hello all.'
];
  
  document.getElementById("search-text").addEventListener("input", (e) => {
    const searchText = e.target.value;
  
    const filteredSentences = sentenceList
      .filter((sentence) => {
        return sentence.toLowerCase().includes(searchText.toLowerCase());
      })
      .map((sentence) => {
        return `<li>${sentence}</li>`;
      });
  
    document.getElementById("list").innerHTML = filteredSentences.join("");
  });
  
  const articlesList = sentenceList.map(
    (sentence) => `<li>${sentence}</li>`
  );
  
  document.getElementById("list").innerHTML = articlesList.join("");

  
// function loremIpsum(word, sentences) {
//   let sentence = sentences.split('. ')
//   let output = [];

//   sentence.map(function(index){
//       if(index.toLowerCase().includes(word.toLowerCase())){
//           output.push(index)
//       }
//   })
//   return output.join(', ')
// }

// console.log(loremIpsum("hello", "hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all."));