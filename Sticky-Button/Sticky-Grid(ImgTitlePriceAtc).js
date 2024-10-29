const style = `
<style>
    .float-cart{
        background: #FFFFFF;
		padding: 12px 20px;
		display: flex !important;
		align-items: center;
		justify-content: space-between;
        gap: 60px;
		position: fixed;
		bottom: -200px;
		left: 0;
		right: 0;
        transition: 1s;
		z-index: 99;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);
    }

    .float-cart .product-info{
        display: grid;
        gap: 5px;
        grid-template-columns:  auto auto ;
    }
    .float-cart .product-info img{
        height:40px;
        width:40px;
    }
    .item1 {
      grid-row: 1 / span 2;
    }
    .float-cart .product-info h6{
        color:#222323;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        text-align: left;
    }
    .float-cart .product-info h5{
      color:#f28a8a;
    }

    .float-cart button{
        background: #FF437B;
        padding: 12px 48px;
        border-radius: 40px;
        color:#FFFFFF !important;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
    }
    @media only screen and (max-width:768px){
        .float-cart{
            display: grid;
            grid-template-columns: auto;
            gap:0px;
            justify-content: center;
            padding:0;
        }

        .float-cart .product-info{
            display: none;
            gap: 4px;
        }

        .float-cart button{
            background: #FF437B;
            padding: 12px 48px;
            border-radius: 15px;
            color: #FFFFFF !important;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
            width: calc(768px - 385px);
            height: 60px;
        }
    }
    
</style>
`;

const float_elm_html = (image, price, title) => `
	<div class="float-cart">
		<div class="product-info">
            <div class="item1"><img src="${image}"></div>
			 <div class="item2"><h6>${title}</h6></div>
             <div class="item3"><h5>${price}</h5></div>
		</div>
		<button onclick="document.querySelector('.btn.btn--add-to-cart').click()"
            id="ProductSubmitButton-{{ section_id }}"
            type="submit"
            name="add">
            ADD TO CART
        </button>
	</div>
`;

const styleIntervl1 = setInterval(() => {
  try {
    const head = document.querySelector("head");
    const exist_elm = document.querySelector("#shopify-section-footer");
    const body = document.querySelector("body");
    //const rating = document.querySelector("span.stamped-badge-caption");
    const price = document.querySelector("span#ProductPrice");
    const title = document.querySelector(".product-single__title");
    const image = document
      .querySelector(".product-single__photo-wrapper img")
      .srcset.split(",", 1)[0];
    if (head && body && title && image && price && exist_elm) {
      head.insertAdjacentHTML("beforeend", style);
      exist_elm.insertAdjacentHTML(
        "afterend",
        float_elm_html(image, price.innerText, title.innerText)
      );
      console.log("Sticky OK");
      clearInterval(styleIntervl1);
    }
  } catch (error) {
    console.error("A/B test style error", error);
  }
}, 10);

window.addEventListener("scroll", function () {
  console.log("Sticky Worked");
  const float = document.querySelector(".float-cart");
  const exist = document.querySelector(".btn.btn--add-to-cart");
  if (float && exist) {
    const topOffset = exist.getBoundingClientRect().bottom;
    if (topOffset <= 0) {
      float.style.bottom = "0";
    } else {
      float.style.bottom = "-200px";
    }
  }
});
