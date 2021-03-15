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

  const rcm = document.querySelector(".right-click-menu");
  rcm.classList.remove("open");
  document.addEventListener("click", (e) => {
    rcm.classList.remove("open");
  });
  rcm.addEventListener("click", (event) => {
    var event = event || window.event;
    event.cancelBubble = true;
    rcm.classList.remove("open");
  });
  document.oncontextmenu = (event) => {
    var event = event || window.event;
    rcm.classList.add("open");
    var l, t;
    l = event.clientX;
    t = event.clientY;
    l = l >= (document.documentElement.clientWidth || document.body.clientWidth) - 260 ? (document.documentElement.clientWidth || document.body.clientWidth) - 260 : l;
    t = t > (document.documentElement.clientHeight || document.body.clientHeight) - 200 ? (document.documentElement.clientHeight || document.body.clientHeight) - 200 : t;
    rcm.style.cssText = `top: ${t}px;left: ${l}px;`;
    return false;
  };
};

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > document.body.clientHeight);
});
