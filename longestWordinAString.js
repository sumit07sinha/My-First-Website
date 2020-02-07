const longestWord= (str) => {
let words= str.split(" ");
let lWord= [""];
 let size=0;
 for (let i=0; i<words.length-1;i++){
 if(words[i].length>size){
  size= words[i].length;
  if(lWord[lWord.length-1].length< words[i].length){
   lWord=[];
   lWord.push(words[i]);
  }
  else{
   lWord=[...lWord,words[i]];
 }
 }
 }
 return [...lWord];;
}
 console.log(longestWord("this is the longest word"));
console.log(longestWord("I woke up early today"));
