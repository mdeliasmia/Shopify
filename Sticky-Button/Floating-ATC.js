const star_svg = `
<svg width="99" height="18" viewBox="0 0 99 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0L12.1292 5.38127L18.0595 6.21885L13.7541 10.3822L14.7901 16.2812L9.5 13.473L4.20993 16.2812L5.24592 10.3822L0.940492 6.21885L6.87084 5.38127L9.5 0Z" fill="#FF9E0D"/>
    <path d="M29.5 0L32.1292 5.38127L38.0595 6.21885L33.7541 10.3822L34.7901 16.2812L29.5 13.473L24.2099 16.2812L25.2459 10.3822L20.9405 6.21885L26.8708 5.38127L29.5 0Z" fill="#FF9E0D"/>
    <path d="M49.5 0L52.1292 5.38127L58.0595 6.21885L53.7541 10.3822L54.7901 16.2812L49.5 13.473L44.2099 16.2812L45.2459 10.3822L40.9405 6.21885L46.8708 5.38127L49.5 0Z" fill="#FF9E0D"/>
    <path d="M69.5 0L72.1292 5.38127L78.0595 6.21885L73.7541 10.3822L74.7901 16.2812L69.5 13.473L64.2099 16.2812L65.2459 10.3822L60.9405 6.21885L66.8708 5.38127L69.5 0Z" fill="#FF9E0D"/>
    <path d="M89.5 0L92.1292 5.38127L98.0595 6.21885L93.7541 10.3822L94.7901 16.2812L89.5 13.473L84.2099 16.2812L85.2459 10.3822L80.9405 6.21885L86.8708 5.38127L89.5 0Z" fill="#FF9E0D"/>
</svg>
`;

const style = `
<style>
    .float-cart{
        background: #F9F2FF;
		padding: 12px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
        gap: 60px;
		position: fixed;
		bottom: -200px;
		left: 0;
		right: 0;
        transition: 1s;
		z-index: 99;
    }

    .float-cart .product-info{
        display: grid;
        gap: 8px;
    }

    .float-cart .product-info h6{
        color: #3D3D4E;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }

    .float-cart .product-info .product-rating{
        display: flex;
        gap:16px;
        align-items: center;
    }

    .float-cart .product-info .product-rating strong{
        font-size: 15px;
        font-weight: 700;
        line-height: 28px;
        text-align: left;
    }

    .float-cart .product-info .product-rating span{
        color: #4B5563;
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        text-align: left;
        text-decoration: underline;
    }

    .float-cart button{
        background: #d43555;
        padding: 12px 48px;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        text-align: center;
        color: white;
        flex-shrink: 0;
    }
	
	.mob-product-rating{
		display: none;
	}

    @media only screen and (max-width:767px){
        .float-cart{
            padding: 12px;
            gap: 20px;
        }
    
        .float-cart .product-info{
            display: grid;
            gap: 4px;
        }
    
        .float-cart .product-info h6{
            font-size: 16px;
            line-height: 16px;
        }
    
        .float-cart .product-info .product-rating{
            gap:8px;
        }
    
        .float-cart .product-info .product-rating strong{
            font-size: 12px;
            line-height: 16px;
        }
    
        .float-cart .product-info .product-rating span{
            font-size: 10px;
            line-height: 16px;
        }
    
        .float-cart button{
            font-size: 12px;
            line-height: 12px;
            padding: 12px 36px;
        }
    }

    @media only screen and (max-width:480px){
        .float-cart{
            padding: 12px 6px;
			flex-direction: column;
            gap: 10px;
        }
    
        .float-cart .product-info h6{
            font-size: 14px;
            line-height: 14px;
            text-align: center;
        }
    
        .float-cart .product-info .product-rating{
            gap:0 4px;
            flex-wrap: wrap;
            justify-content: center;
        }
    
        .float-cart .product-info .product-rating strong{
            font-size: 10px;
            line-height: 14px;
        }
    
        .float-cart .product-info .product-rating span{
            font-size: 8px;
            line-height: 14px;
        }
		
        .float-cart button{
            font-size: 10px;
            line-height: 10px;
            padding: 12px 24px;
			width: 100%;
        }
		.float-cart .product-info{
            display: none;
        }
		.mob-product-rating{
			display: flex;
			align-items: center;
            justify-content: center;
			gap:0 4px;
		}
		.mob-product-rating strong{
			display: flex;
			line-height: 14px;
		}
    }
</style>
`;

const float_elm_html = (title, rating) => `
	<div class="float-cart">
		<div class="product-info">
			<h6>${title}</h6>
			<div class="product-rating">
				<strong>${rating}/5.0</strong>
				${star_svg}
				<span>Over 825K+ satisfied customers love</span>
			</div>
		</div>
		<button onclick="document.querySelector('.AddToCart_btn-add-to-cart___RRI8.button').click()">ADD TO CART</button>
		<div class="mob-product-rating">
				<strong>${rating}/5.0</strong>
				${star_svg}
		</div>
	</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#product-detail-action');
	const head = document.querySelector('head');
	const body = document.querySelector('body');
	const rating = document.querySelector("[itemprop='ratingValue']");
	const title = document.querySelector('h1.Title_title__rAIlq');
	if (
		exist_elm &&
		title &&
		rating &&
		body &&
		head &&
		!document.querySelector('.float-cart-touched')
	) {
		head.insertAdjacentHTML('beforeend', style);
		title.classList.add('float-cart-touched');
		exist_elm.insertAdjacentHTML(
			'afterend',
			float_elm_html(title.innerText, rating.innerText)
		);
	}
}, 10);

window.addEventListener('scroll', function () {
	const float = document.querySelector('.float-cart');
	const exist = document.querySelector(
		'.AddToCart_btn-add-to-cart___RRI8.button'
	);
	if (float && exist) {
		const topOffset = exist.getBoundingClientRect().bottom;
		if (topOffset <= 0) {
			float.style.bottom = '0';
		} else {
			float.style.bottom = '-200px';
		}
	}
});
