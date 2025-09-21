function createRow(q) {
  let row = `<tr><td class="qnum">${q}</td><td class="choices">`;
  ["A", "B", "C", "D", "E"].forEach((opt) => {
    const id = `q${q}${opt}`;
    row += `<input type="radio" id="${id}" name="q${q}" value="${opt}"><label class="choice-label" for="${id}">${opt}</label>`;
  });
  row += `</td></tr>`;
  return row;
}

let left = "";
for (let i = 1; i <= 13; i++) left += createRow(i);
document.getElementById("left").innerHTML = left;

let right = "";
for (let i = 14; i <= 25; i++) right += createRow(i);
document.getElementById("right").innerHTML = right;
