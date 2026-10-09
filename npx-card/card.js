#!/usr/bin/env node

const reset = "\x1b[0m";
const bold = "\x1b[1m";
const dim = "\x1b[2m";
const white = "\x1b[37m";
const cyan = "\x1b[36m";
const yellow = "\x1b[33m";
const magenta = "\x1b[35m";
const green = "\x1b[32m";

const lines = [
  ``,
  `${bold}${white}  Arjun Singh${reset} ${dim}aka arjunrhetoric${reset}`,
  `${dim}  product @ innoverse | Mumbai, India${reset}`,
  ``,
  `  ${magenta}i build things that actually work (mostly).${reset}`,
  ``,
  `  ${yellow}GitHub:${reset}   https://github.com/arjunrhetoric`,
  `  ${cyan}LinkedIn:${reset}  https://www.linkedin.com/in/arjun-singh-9b85623a4`,
  `  ${white}X:${reset}        https://x.com/arjunrhetoric`,
  `  ${yellow}LeetCode:${reset}  https://leetcode.com/u/arjunrhetoric`,
  `  ${green}Email:${reset}     arjunrhetoric@gmail.com`,
  ``,
  `  ${dim}Projects: innoverse / thesubconscious / formflow / infrachat${reset}`,
  `  ${dim}Run this card again anytime: npx arjunrhetoric${reset}`,
  ``,
];

const width = lines.reduce((max, line) => {
  const plain = line.replace(/\x1b\[[0-9;]*m/g, "");
  return Math.max(max, plain.length);
}, 0);

const top = `╭${"─".repeat(width + 2)}╮`;
const bottom = `╰${"─".repeat(width + 2)}╯`;

console.log(top);
for (const line of lines) {
  const plain = line.replace(/\x1b\[[0-9;]*m/g, "");
  console.log(`│ ${line}${" ".repeat(width - plain.length)} │`);
}
console.log(bottom);
