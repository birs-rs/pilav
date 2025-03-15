
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".link-button,.bottom_address ").forEach(function (button) {
      button.addEventListener("click", function () {
        gtag("event", "link_click", {
          "position": this.getAttribute("data-position"),
          "type": this.getAttribute("data-button-type"),
          "block": this.getAttribute("data-block")
        });
      });
    });
  });
