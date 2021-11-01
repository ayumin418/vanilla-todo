import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-item";

  // pタグ生成
  const lead = document.createElement("p");
  lead.className = "list-lead";
  lead.innerHTML = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(lead);

  //ulタグの子要素に各要素を設定
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
