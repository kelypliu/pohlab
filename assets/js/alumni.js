document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion-btn");
  
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        
        for (let j = 0; j < acc.length; j++) {
          if (j !== i) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.display = "none";
          }
        }
  
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
      });
    }
  });