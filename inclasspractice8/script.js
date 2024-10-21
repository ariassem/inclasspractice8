
const paragraph = document.getElementById('text');
const textContent = paragraph.innerHTML;
const words = textContent.split(' ');

const highlightedWords = words.map(word => {
    if (word.length > 8) {
        return `<span class="highlight">${word}</span>`;
    }
    return word;
});
paragraph.innerHTML = highlightedWords.join(' ');

const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
link.textContent = 'Source';
paragraph.insertAdjacentElement('afterend', link);

let splitSentences = paragraph.innerHTML.split('. ').join('.<br><br>');
paragraph.innerHTML = splitSentences;

const wordCount = words.filter(word => word.trim().length > 0).length;
document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;

let replacedText = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
paragraph.innerHTML = replacedText;
