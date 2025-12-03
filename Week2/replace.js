function cesorword(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalPost = " JavaScript is fun, but sometimes javaScript can be tricky. I love learning JavaScript!";
const cleanPost = cesorword(originalPost, "JavaScript");
console.log(cleanPost);