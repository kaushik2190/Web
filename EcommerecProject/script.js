let bagItems;

onLoad();

function onLoad() {
  menuToggle();
  let bagItemStr = bagItems = localStorage.getItem('bagItem');
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayProducts();
  displayItemCount();
}

/*menu toggle*/

function menuToggle() {
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('menu');
    navbar.classList.toggle('open');
  }
  /*toggle remove on scroll*/

  window.onscroll = () => {
    menu.classList.remove('menu');
    navbar.classList.remove('open');
  }

}

/*add to cart*/

function addToBag(itemId) {
  bagItems.push(itemId)
  localStorage.setItem('bagItem', JSON.stringify(bagItems));
  displayItemCount();
}

/*display cart count*/

function displayItemCount() {
  let bagItemCount = document.querySelector('.count');

  if (bagItems.length > 0) {
    bagItemCount.style.visibility = 'visible';
    bagItemCount.innerText = bagItems.length;
  } else {
    bagItemCount.style.visibility = 'hidden';
  }

}

/*display product using js*/

function displayProducts() {
  let productContainer = document.querySelector('.product-container');

  let innerHtml = '';

  items.forEach(items => {
    innerHtml += ` <div class="products">
  <img src="${items.product_img}" alt=""><hr>
  <div class="rating">
    ${items.rating.star} | ${items.rating.review} <i class="fa-regular fa-heart"></i>
  </div>
  <div class="company-name">${items.company_name}</div>
  <div class="item-name">${items.product_name}</div>
  <div class="price">
    <span class="current-price">Rs. ${items.current_price}</span>
    <span class="original-price">Rs. ${items.original_price}</span>
    <span class="discount">(${items.discount}% Off)</span>
  </div>
  <button class="add-to-cart" onclick="addToBag(${items.id})">Add to cart</button>
</div>
`;
  })

  productContainer.innerHTML = innerHtml;
}


