document.getElementById("surveyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Here you can process form data if needed

  document.getElementById("surveyForm").style.display = "none";
  document.getElementById("thankYouMessage").classList.remove("hidden");
});
