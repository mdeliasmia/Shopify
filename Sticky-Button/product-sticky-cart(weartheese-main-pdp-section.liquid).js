const style = `
<style>
	.new-float-elm{
		display: none;
		align-items: center;
		justify-content: center;
		gap: 16px;
		position: fixed;
		bottom: 10px;
		left: 10px;
		right: 10px;
		border-radius: 4px;
		z-index: 99;
	}
</style>
`;

const new_elm_html = `
<button class="new-float-elm" onclick="document.querySelector('.btn-cart').click()">
	<div class="cart-white-bag-icon"></div>
	<span>ADD TO CART</span>
</button>
`;

const interval = setInterval(() => {
  const body = document.querySelector("body");
  const head = document.querySelector("head");
  if (head && !document.querySelector(".new-float-elm")) {
    head.insertAdjacentHTML("beforeend", style);
    body.insertAdjacentHTML("beforeend", new_elm_html);
    clearInterval(interval);
  }
}, 10);

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", function () {
  const float = document.querySelector(".new-float-elm");
  const exist = document.querySelector(".btn-cart");
  if (exist && float) {
    if (!isElementInViewport(exist)) {
      float.style.display = "flex";
    } else {
      float.style.display = "none";
    }
  }
});
console.log("Sticky OK");