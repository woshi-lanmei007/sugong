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

  // 预约表单：校验通过后，将预约信息整理成短信，一键发送到店内预约号码
  var form = document.getElementById("bookingForm");
  var tip = document.getElementById("formTip");
  var RESTAURANT_PHONE = "15949046027";
  var typeLabels = {
    business: "商务宴请",
    birthday: "生日寿宴",
    family: "家宴小聚",
    tea: "茶叙 / 其他"
  };

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

      var date = form.date.value;
      var time = form.time.value;
      var guests = form.guests.value;
      var type = typeLabels[form.type.value] || form.type.value;
      var note = form.note.value.trim();

      var lines = [
        "【苏公瓦舍·荷园茶宴 预约】",
        "姓名：" + name,
        "电话：" + phone,
        "到店：" + date + " " + time,
        "人数：" + guests + "人",
        "类型：" + type
      ];
      if (note) lines.push("备注：" + note);

      var body = lines.join("\n");
      tip.style.color = "";
      tip.textContent = "已为您打开短信，请确认发送，我们收到后会尽快回电确认。";

      window.location.href = "sms:" + RESTAURANT_PHONE + "?body=" + encodeURIComponent(body);
    });
  }
});
