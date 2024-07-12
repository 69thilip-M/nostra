/* navbar */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
/* navbar end*/

/* bonus */
function hideBonus() {
  const bonus = document.querySelector(".bonus");
  bonus.style.display = "none";
}
/* bonus end*/

/* collection search */
let search = document.getElementById("search");
let container = document.querySelector(".collection_content2-card");
let hvalue = container.querySelectorAll("h3");



search.addEventListener("keyup", function (event) {
  var inputtext = event.target.value.toUpperCase();
  //console.log(hlist);
  //console.log(event.target.value);
  for (let i = 0; i < hlist.length; i++) {
    console.log(hlist[i]);
    if (hlist[i].textContent.toUpperCase().indexOf(inputtext) < 0) {
      hlist[i].parentElement.style.display = "none";
    } else {
      hlist[i].parentElement.style.display = "block";
    }
  }
});

