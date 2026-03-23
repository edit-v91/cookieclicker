let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  const muffin = document.getElementById("muffin-photo");
  muffin.addEventListener("click", () => countClick());
});

function countClick() {
    counter++;
    let muffinCount = document.getElementById("click-counter");
    muffinCount.innerHTML = `${counter} muffin(s)`;
    return muffinCount;
}

