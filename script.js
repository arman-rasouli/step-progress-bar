const nextElement = document.getElementById("next");
const stepsElement = document.querySelectorAll(".step");
const prevElement = document.getElementById("prev");
const progreesElement = document.querySelector(".progres-bar-frontEnd");
let currentChecked = 1;

nextElement.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsElement) {
    currentChecked = stepsElement;
  }
  updateStepProgress();
});

prevElement.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsElement.forEach((stepsElement, index) => {
    if (index < currentChecked) {
      stepsElement.classList.add("checked");
      stepsElement.innerHTML = `<i class="fa-solid fa-check"></i>
      <small>${
        index === 0 ? "Start" : index === 4 ? "Final" : "Step" + index
      }</small>`;
    } else {
      stepsElement.classList.remove("checked");
      stepsElement.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });
  const checkedNumber = document.querySelectorAll(".checked");
  progreesElement.style.width =
    ((checkedNumber.length - 1) / (stepsElement.length - 1)) * 100 + "%";

  if (currentChecked === stepsElement.length) {
    nextElement.disabled = true;
  } else {
    nextElement.disabled = false;
  }
}
