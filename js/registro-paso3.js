const select = document.querySelector("#select");
const ulList = document.querySelector("#tags");

function deleteTag(btnX, element) {
  btnX.addEventListener("click", (e) => {
    e.preventDefault();
    element.remove();
  });
}

select.addEventListener("change", (e) => {
  const btnX = document.createElement("button");
  btnX.textContent = "X";
  btnX.setAttribute("type", "button");
  btnX.classList.add("btnX");

  const option = e.target.value;
  const li = document.createElement("li");
  ulList.appendChild(li);
  li.textContent = option;
  li.classList.add("tags");
  li.appendChild(btnX);
  console.log(e.target.value);
  deleteTag(btnX, li);
});
