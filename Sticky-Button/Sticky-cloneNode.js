const style = `
<style>
	sticky-atc-panel.sticky-atc-panel,button.kl-teaser-YgTnPb.needsclick {
		display: none!important;
	}
   .product-form__submit{
     background:#FFB81C;
     color:black;
     font-weight:700;
     text-transform: uppercase;
   }
    
    .float-atc-btn{
        position: fixed;
        bottom: -200px;
		width: calc(100% - 40px);
		left: 20px;
        z-index: 9999;
    }
	@media (max-width: 768px) {
		.float-atc-btn{
			width: calc(100% - 20px);
			left: 10px;
		}
	}
</style>
`;

const new_elm_html = (price) => `
    <span>| ${price} </span>
`;
const styleInterval1 = setInterval(() => {
  try {
    const head = document.querySelector("head");
    if (head) {
      head.insertAdjacentHTML("beforeend", style);
      clearInterval(styleInterval1);
    }
  } catch (error) {
    console.error("A/B test style error", error);
  }
}, 10);

const interval = setInterval(() => {
  try {
    const exist_elm = document.querySelector(".footer__content-bottom");
    const cartBtn = document.querySelector(".product-form__submit.button");
    const price = document.querySelector("span.price-item");
    if (exist_elm && cartBtn) {
      const floatBtn = cartBtn.cloneNode(true);
      floatBtn.classList.add("float-atc-btn");
      floatBtn.insertAdjacentHTML("beforeend", new_elm_html(price.innerText));
      floatBtn.onclick = () => {
        cartBtn.click();
        const btn = document.querySelector(".float-atc-btn");
        btn.style.display = "none";
      };
      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", floatBtn);
      clearInterval(interval);
    }
  } catch (error) {
    console.error("A/B test js error", error);
  }
}, 10);

document.getElementById("cart-icon-bubble").addEventListener("click", (e) => {
  const btn = document.querySelector(".float-atc-btn");
  btn.style.display = "none";
});
document
  .querySelector("button.drawer__close")
  .addEventListener("click", (e) => {
    const btn = document.querySelector(".float-atc-btn");
    btn.style.display = "block";
  });
window.addEventListener("scroll", function () {
  console.log("Sticky Worked");
  const exist = document.querySelector(".product-form__submit.button");
  const btn = document.querySelector(".float-atc-btn");
  if (exist && btn) {
    const topOffset = exist.getBoundingClientRect().bottom;
    if (topOffset <= 0) {
      btn.style.bottom = "20px";
    } else {
      btn.style.bottom = "-200px";
      btn.style.display = "block";
    }
  }
});
