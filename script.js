// Future interactivity goes here
console.log("Betterdays Foundation loaded.");


document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    const nameList = document.getElementById("nameList");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    nameList.appendChild(nameSpan);
    input.value = "";
  }
});
