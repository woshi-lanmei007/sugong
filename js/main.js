// 苏公瓦舍·荷园茶宴 — 基础交互脚本

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");

  // 移动端导航开关
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });

    // 点击导航链接后自动收起菜单
    header.querySelectorAll(".main-nav a, .nav-cta").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
      });
    });
  }

});
