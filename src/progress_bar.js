var progress_icon = {
  checkmark: {
    name: "checkmark", 
    stage: "finish",
    render: function () {
      return `<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>`
    }
  },
  circle: {
    name: "circle",
    stage: 'current',
    render: function () {
      return `<circle cx="26" cy="26" r="18"/>`
      }
    }
}
var a = progress_icon.checkmark.render();
var checkmark = document.getElementsByClassName("checkmark");
checkmark[1].innerHTML = a;