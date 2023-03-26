const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const products = document.querySelectorAll(".product");
  const productName = storeitems.getElementsByTagName("h2");

  for (var i = 0; i < productName.length; i++) {
    let match = productName[i];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
};
