var imgPopup = document.getElementById("imgPopup");
  imgPopup.addEventListener("click", function () {
    var modal = document.getElementById("popup-modal");
    var closeBtn = document.querySelector(".popup-close");
  
    // Show the modal when the page loads
    modal.style.display = "grid";
    var myVar = setTimeout(myFunction, 3000);
  
    // Close the modal when the close button is clicked
    closeBtn.onclick = function () {
      modal.style.display = "none";
      clearTimeout(myVar);
    };
  
    // Close the modal if the user clicks anywhere outside the modal content
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        clearTimeout(myVar);
      }
    };
});

  function myFunction() {
    alert("Hello");
    var url="https://cupidodesign.com/en/collections/best-sellers/products/albero-della-gioia";
    {% if section.settings.imgIconUrl != null %}
       url="{{section.settings.imgIconUrl}}";
    {% else %}
      url="https://cupidodesign.com/";
    {% endif %}
    //window.history.pushState("","",url);
    location.href=url;
    console.log(url);
  }
