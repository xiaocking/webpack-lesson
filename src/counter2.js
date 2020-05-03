export default function addNum() {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.innerHTML = 1000;
  div.setAttribute("id", "number");
  div.onclick = function () {
    div.innerHTML = parseInt(div.innerHTML) + 1;
  };
  root.append(div);
}
