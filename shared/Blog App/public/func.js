
const toggleBtn = $(".toggle-btn")
const toggleBtnIcon = $(".toggle-btn i")
const dropDownMenu = $(".dropdown")


toggleBtn.on("click", () => {
  dropDownMenu.toggleClass("open")
  const isOpen = dropDownMenu.hasClass("open");

  toggleBtnIcon.removeClass("fa-xmark fa-bars").addClass(isOpen ? "fa-xmark" : "fa-bars");
})




$(document).ready(function(x){
  console.log("Hola")
})
