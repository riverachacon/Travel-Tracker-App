
const toggleBtn = $(".toggle-btn")
const toggleBtnIcon = $(".toggle-btn i")
const dropDownMenu = $(".dropdown")


toggleBtn.on("click", () => {
  dropDownMenu.toggleClass("open")
  const isOpen = dropDownMenu.hasClass("open");

  toggleBtnIcon.removeClass("fa-xmark fa-bars").addClass(isOpen ? "fa-xmark" : "fa-bars");
})

/*console log in node to check what element in the html returns undefined
so we can create an alert when they dont insert a title or post(body text) */


$(document).ready(function(){
  console.log("Hola")
})


$("input[type='submit']").on("click", (event) => {
  if ($("#title").val() === "") {
    alert("Please enter a Title to your blog");
    event.preventDefault(); // Stop form submission
  }
  if ($("#blog").val() === "") {
    alert("Please enter text to your blog");
    event.preventDefault(); // Stop form submission
  }
});



$("input[type='submit']").on("click", (event) => {
  if ($(".title-input").val() === "") {
    alert("Please enter a Title to your blog");
    event.preventDefault(); // Stop form submission
  }
  if ($(".text-input").val() === "") {
    alert("Please enter text to your blog");
    event.preventDefault(); // Stop form submission
  }
});