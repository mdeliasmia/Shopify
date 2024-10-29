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
// window.addEventListener("scroll", function () {
//   console.log("Sticky Worked");
//   const float = document.querySelector(".float-cart");
//   const exist = document.querySelector(".product-form__submit.button");
//   if (float && exist) {
//     const topOffset = exist.getBoundingClientRect().bottom;
//     if (topOffset <= 0) {
//       float.style.bottom = "20px";
//     } else {
//       float.style.bottom = "-200px";
//     }
//   }
// });
// const star_svg = `
// <svg width="99" height="18" viewBox="0 0 99 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M9.5 0L12.1292 5.38127L18.0595 6.21885L13.7541 10.3822L14.7901 16.2812L9.5 13.473L4.20993 16.2812L5.24592 10.3822L0.940492 6.21885L6.87084 5.38127L9.5 0Z" fill="#FF9E0D"/>
//     <path d="M29.5 0L32.1292 5.38127L38.0595 6.21885L33.7541 10.3822L34.7901 16.2812L29.5 13.473L24.2099 16.2812L25.2459 10.3822L20.9405 6.21885L26.8708 5.38127L29.5 0Z" fill="#FF9E0D"/>
//     <path d="M49.5 0L52.1292 5.38127L58.0595 6.21885L53.7541 10.3822L54.7901 16.2812L49.5 13.473L44.2099 16.2812L45.2459 10.3822L40.9405 6.21885L46.8708 5.38127L49.5 0Z" fill="#FF9E0D"/>
//     <path d="M69.5 0L72.1292 5.38127L78.0595 6.21885L73.7541 10.3822L74.7901 16.2812L69.5 13.473L64.2099 16.2812L65.2459 10.3822L60.9405 6.21885L66.8708 5.38127L69.5 0Z" fill="#FF9E0D"/>
//     <path d="M89.5 0L92.1292 5.38127L98.0595 6.21885L93.7541 10.3822L94.7901 16.2812L89.5 13.473L84.2099 16.2812L85.2459 10.3822L80.9405 6.21885L86.8708 5.38127L89.5 0Z" fill="#FF9E0D"/>
// </svg>
// `;

// const style = `
// <style>
//     .float-cart{
//         background: #F9F2FF;
// 		padding: 12px 20px;
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
//         gap: 60px;
// 		position: fixed;
// 		bottom: -200px;
// 		left: 0;
// 		right: 0;
//         transition: 1s;
// 		z-index: 99;
//     }

//     .float-cart .product-info{
//         display: grid;
//         gap: 8px;
//     }

//     .float-cart .product-info h6{
//         color: #3D3D4E;
//         font-size: 24px;
//         font-weight: 400;
//         line-height: 24px;
//         text-align: left;
//     }

//     .float-cart .product-info .product-rating{
//         display: flex;
//         gap:16px;
//         align-items: center;
//     }

//     .float-cart .product-info .product-rating strong{
//         font-size: 15px;
//         font-weight: 700;
//         line-height: 28px;
//         text-align: left;
//     }

//     .float-cart .product-info .product-rating span{
//         color: #4B5563;
//         font-size: 14px;
//         font-weight: 500;
//         line-height: 28px;
//         text-align: left;
//         text-decoration: underline;
//     }

//     .float-cart button{
//         background: #FFB81C;
//         padding: 12px 48px;
//         border-radius: 4px;
//         font-size: 20px;
//         font-weight: 700;
//         line-height: 20px;
//         text-align: center;
//         color: black;
//         flex-shrink: 0;
//     }

// 	.mob-product-rating{
// 		display: none;
// 	}

//     @media only screen and (max-width:767px){
//         .float-cart{
//             padding: 12px;
//             gap: 20px;
//         }

//         .float-cart .product-info{
//             display: grid;
//             gap: 4px;
//         }

//         .float-cart .product-info h6{
//             font-size: 16px;
//             line-height: 16px;
//         }

//         .float-cart .product-info .product-rating{
//             gap:8px;
//         }

//         .float-cart .product-info .product-rating strong{
//             font-size: 12px;
//             line-height: 16px;
//         }

//         .float-cart .product-info .product-rating span{
//             font-size: 10px;
//             line-height: 16px;
//         }

//         .float-cart button{
//             font-size: 12px;
//             line-height: 12px;
//             padding: 12px 36px;
//         }
//     }

//     @media only screen and (max-width:480px){
//         .float-cart{
//             padding: 12px 6px;
// 			flex-direction: column;
//             gap: 10px;
//         }

//         .float-cart .product-info h6{
//             font-size: 14px;
//             line-height: 14px;
//             text-align: center;
//         }

//         .float-cart .product-info .product-rating{
//             gap:0 4px;
//             flex-wrap: wrap;
//             justify-content: center;
//         }

//         .float-cart .product-info .product-rating strong{
//             font-size: 10px;
//             line-height: 14px;
//         }

//         .float-cart .product-info .product-rating span{
//             font-size: 8px;
//             line-height: 14px;
//         }

//         .float-cart button{
//             font-size: 10px;
//             line-height: 10px;
//             padding: 12px 24px;
// 			width: 100%;
//         }
// 		.float-cart .product-info{
//             display: none;
//         }
// 		.mob-product-rating{
// 			display: flex;
// 			align-items: center;
//             justify-content: center;
// 			gap:0 4px;
// 		}
// 		.mob-product-rating strong{
// 			display: flex;
// 			line-height: 14px;
// 		}
//     }
// </style>
// `;

// const float_elm_html = (title, rating, price) => `
// 	<div class="float-cart">
// 		<div class="product-info">
// 			<h6>${title}</h6>
//              <h6>${price}</h6>
// 			<div class="product-rating">
// 				<strong>${rating}/5.0</strong>
// 				${star_svg}
// 				<span>Over 825K+ satisfied customers love</span>
// 			</div>
// 		</div>
// 		<button onclick="document.querySelector('.product-form__submit.button').click()"
//             id="ProductSubmitButton-{{ section_id }}"
//             type="submit"
//             name="add">
//             ADD TO CART
//         </button>
// 		<div class="mob-product-rating">
// 				<strong>${rating}/5.0</strong>
// 				${star_svg}
// 		</div>
// 	</div>
// `;

// const interval = setInterval(() => {
//   const exist_elm = document.querySelector(".footer__content-bottom");
//   const head = document.querySelector("head");
//   const body = document.querySelector("body");
//   const rating = document.querySelector(".loox-rating-label");
//   const price = document.querySelector("span.price-item");
//   const title = document.querySelector("div.product__title");
//   if (
//     exist_elm &&
//     title &&
//     rating &&
//     body &&
//     head &&
//     !document.querySelector(".float-cart-touched")
//   ) {
//     head.insertAdjacentHTML("beforeend", style);
//     title.classList.add("float-cart-touched");
//     exist_elm.insertAdjacentHTML(
//       "afterend",
//       float_elm_html(title.innerText, rating.innerText, price.innerText)
//     );
//   }
// }, 10);

// window.addEventListener("scroll", function () {
//   //console.log("Sticky Worked");
//   const float = document.querySelector(".float-cart");
//   const exist = document.querySelector(".product-form__submit.button");
//   if (float && exist) {
//     const topOffset = exist.getBoundingClientRect().bottom;
//     if (topOffset <= 0) {
//       float.style.bottom = "0";
//     } else {
//       float.style.bottom = "-200px";
//     }
//   }
// });
