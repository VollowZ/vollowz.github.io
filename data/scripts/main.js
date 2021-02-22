function Get(elem_name) {
  return document.querySelector(elem_name);
}
function GetAll(elem_name) {
  return document.querySelectorAll(elem_name);
}

const header = Get("header");

window.onload = function () {
  Get(".progress").style.cssText = "transform: translateY(-5px);";
  setTimeout(() => {
    Get(".progress").remove();
  }, 200);
};

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > document.body.clientHeight);
});
