$(document).ready(function() {

    const body = document.querySelector("#changebgimg");
    const li = document.querySelectorAll("li");

    li.forEach(el => {
        el.addEventListener("mouseover", () => {

            let bg = el.getAttribute("data-bg");
            body.setAttribute('src', bg)
        });
    });

  });
  