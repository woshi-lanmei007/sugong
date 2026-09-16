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

  // 预约表单：基础校验与提交反馈（当前为静态演示，未连接后端）
  var form = document.getElementById("bookingForm");
  var tip = document.getElementById("formTip");

  if (form && tip) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var phonePattern = /^1[3-9]\d{9}$/;

      if (!name) {
        tip.textContent = "请填写您的称呼";
        tip.style.color = "#b0433b";
        return;
      }
      if (!phonePattern.test(phone)) {
        tip.textContent = "请填写正确的11位手机号";
        tip.style.color = "#b0433b";
        return;
      }

      tip.style.color = "";
      tip.textContent = "预约信息已提交，我们将尽快致电与您确认，感谢您的信任。";
      form.reset();
    });
  }
});
