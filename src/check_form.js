const inputs = document.querySelectorAll('input');
const submit_btn = document.getElementsByClassName('submit-btn')[0];
submit_btn.disabled = true;

function input_fill() {
  var all_fill= true;
  inputs.forEach(input => {
    if (input.value === "") {
      all_fill = false;
    }
  })
  if (all_fill === true) {
    submit_btn.disabled = false;
    submit_btn.classList.toggle('active');
  } else {
    submit_btn.disabled = true;
  }
}

inputs.forEach(input => {
  input.addEventListener('keydown', input_fill);
  input.addEventListener('keyup', input_fill);
})