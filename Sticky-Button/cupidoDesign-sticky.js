const eyeSvg = `
<svg
	width="32"
	height="32"
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M15.9788 7C11.1076 7 6.11069 9.81938 2.17693 15.4581C2.06465 15.6208 2.00312 15.8132 2.00012 16.0109C1.99711 16.2086 2.05277 16.4027 2.16006 16.5688C5.18256 21.3 10.1126 25 15.9788 25C21.7813 25 26.8126 21.2888 29.8407 16.5469C29.9455 16.3841 30.0012 16.1945 30.0012 16.0009C30.0012 15.8073 29.9455 15.6178 29.8407 15.455C26.8057 10.7675 21.7376 7 15.9788 7Z"
		stroke="black"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
		stroke="black"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
</svg>`;

const style = `
<style>
	sticky-atc-panel.sticky-atc-panel,button.kl-teaser-YgTnPb.needsclick {
		display: none!important;
	}
    .social-proof {
        position: absolute;
        top: 20px;
        left: 0px;
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 6px 20px 6px 10px;
        gap: 0px 8px;
        justify-content: center;
        align-items: center;
        border-radius: 0px 40px 40px 0px;
        background: #FF437A;
        box-shadow: 1px 4px 5.6px 0px #695D5C61;
        z-index: 29;
        text-align: left;
        color: #fff;
    }
    @media only screen and (max-width: 768px) {
        .social-proof svg{
            grid-row: span 2;
            flex-shrink: 0;
            width:30px;
        }
        .social-proof strong{
            font-size: 10px !important;
            font-weight: 700;
        }
        .social-proof span{
            font-size: 9px !important;
            font-weight: 400;
        }
    }
    .social-proof svg{
        grid-row: span 2;
        flex-shrink: 0;
    }
    .social-proof svg path{
        stroke: #fff!important;
    }
    .social-proof strong{
        font-size: 14px;
        font-weight: 700;
    }
    .social-proof span{
        font-size: 12px;
        font-weight: 400;
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

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const social_proof = (views) => `
<div class="social-proof">
    ${eyeSvg}
    <strong>Non lasciartelo sfuggire!</strong>
    <span>${views} visite nelle ultime 24 ore!</span>
</div>
`;
const new_elm_html = (price) => `
    <span> ${price} </span>
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
    const exist_elm = document.querySelector(
      ".media-viewer__item .media.relative"
    );
    const randomNumber = getRandomNumberBetween(300, 1000);
    const cartBtn = document.querySelector(".product-info__add-button button");
    const price = document.querySelector("strong.price__current");
    //const title = document.querySelector("h1.product-title");
    if (exist_elm && !document.querySelector(".social-proof") && cartBtn) {
      const floatBtn = cartBtn.cloneNode(true);
      floatBtn.classList.add("float-atc-btn");
      //const floatBtn1 = document.querySelector(".float-atc-btn");
      floatBtn.insertAdjacentHTML("beforeend", new_elm_html(price.innerText));
      floatBtn.onclick = () => {
        cartBtn.click();
        const btn = document.querySelector(".float-atc-btn");
        btn.style.display = "none";
      };
      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", floatBtn);
      exist_elm.insertAdjacentHTML("afterend", social_proof(randomNumber));
      clearInterval(interval);
    }
  } catch (error) {
    console.error("A/B test js error", error);
  }
}, 10);

document.getElementById("cart-icon").addEventListener("click", (e) => {
  const btn = document.querySelector(".float-atc-btn");
  btn.style.display = "none";
});
document.querySelector(".drawer__close-btn").addEventListener("click", (e) => {
  const btn = document.querySelector(".float-atc-btn");
  btn.style.display = "block";
});
window.addEventListener("scroll", function () {
  const exist = document.querySelector(".product-info__add-button");
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
