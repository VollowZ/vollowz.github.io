function Get(elem_name) {
  return document.querySelectorAll(elem_name)[0];
}

window.onload = function () {
  Get(".progress").style.cssText = "transform: translateY(-5px);";
  setTimeout(() => {
    Get(".progress").remove();
  }, 200);
};
