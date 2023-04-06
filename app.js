// 获取元素
const textArea = document.getElementById('text');
const prefixInput = document.getElementById('prefix');
const prefixBtn = document.getElementById('prefix-btn');
const suffixInput = document.getElementById('suffix');
const suffixBtn = document.getElementById('suffix-btn');
const replaceInput = document.getElementById('replace');
const replacementInput = document.getElementById('replacement');
const replaceBtn = document.getElementById('replace-btn');

// 添加前缀
prefixBtn.addEventListener('click', function() {
  const prefix = prefixInput.value;
  const text = textArea.value;
  const lines = text.split('\n');
  const processedLines = lines.map(function(line) {
    return prefix + line;
  });
  textArea.value = processedLines.join('\n');
});

// 添加后缀
suffixBtn.addEventListener('click', function() {
  const suffix = suffixInput.value;
  const text = textArea.value;
  const lines = text.split('\n');
  const processedLines = lines.map(function(line) {
    return line + suffix;
  });
  textArea.value = processedLines.join('\n');
});

// 替换文本
replaceBtn.addEventListener('click', function() {
  const text = textArea.value;
  const searchFor = replaceInput.value;
  const replaceWith = replacementInput.value;
  const regex = new RegExp(searchFor, 'g');
  const processedText = text.replace(regex, replaceWith);
  textArea.value = processedText;
});
