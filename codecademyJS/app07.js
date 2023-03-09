let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');            // 用空格字符''分隔字符串，并将每个单词存储为数组的一个元素。
//console.log(storyWords);
let count = 0;                                
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

storyWords = storyWords.filter(word => word !== unnecessaryWord);  //检查数组中是是否含有unnecessaryWord元素，若是，取缔它，若不是，原数据输出
storyWords = storyWords.map((word) =>{
  if(word === misspelledWord){
    return 'beautiful';
  }else{
    return word;
  }
});
//storyWords = storyWords.map(word => misspelledWord ? 'beautiful' : word);
let badWordIndex = storyWords.findIndex(word => word === 'freaking');   //检查数组中是否有元素与'freaking'匹配，并找到它的位置
storyWords[badWordIndex] = 'really';                                    //替换数组中固定某位置的元素
//let lengthCheck = storyWords.every(word => word.length < 10 );
storyWords = storyWords.filter((word) =>{                                            //检查数组中是否有元素长度大于10，找到他并替
  storyWords.forEach((word) =>{
     if(word.length < 10){
       return word;
     }else{
       return 'amazing';
    }
  })
});
let lengthCheck = storyWords.every(word => word.length < 10 );           //检查数组中是否有元素的长度大于10
storyWords.forEach ((storyWord) => {          //遍历数组个元素并计数
  console.log(' it is have '+storyWord);
  count++;
});
console.log(storyWords.join(' '));            //把数组各项组合成一个字符串，提供一个空格字符 ( ' ') 的参数，以在字符串中用空格分隔每个数组元素
console.log(badWordIndex);
console.log(lengthCheck);
console.log(count);