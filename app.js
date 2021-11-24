const cart = document.querySelector('#svg-basket');
const modal = document.querySelector('.navigation__tools__modal');

const increase = document.querySelector('.cart__info__increase');
const decrease = document.querySelector('.cart__info__decrease');
const count = document.querySelector('.cart__info__count');
let countItems = 1;
let MAX_ITEMS = 10;

const shoesImg = document.querySelector('.shoes-img');
const modalImg = document.querySelector('.modal-img-shoes');
const shadow = document.querySelector('.shadow-bg');

const addToCartItem = document.querySelector('.cart__info__add-to-cart');


let itemInCart = 1; 
const countProducts = document.querySelector('.navigation__tools__item');
let productInCart = document.querySelector('.svg-item-is-full');


// Open modal cart
const openModal = () => {
    cart.addEventListener('click', ()=> {
        modal.classList.toggle('is-active');
    })
}
count.innerHTML = countItems;

// widgets increase or decrease value
const widgets = () => {

    increase.addEventListener('click', () => {
        if(countItems === MAX_ITEMS) {
            return
        }
        itemInCart++
        countItems++
        count.innerHTML = countItems
    })

    decrease.addEventListener('click', () => {

        if(countItems > 1) {
            countItems--
            count.innerHTML = countItems
            itemInCart--
        }

    })
}

 // open modal with pictures of shoes and description

// const openModalPictures = () => {

//     const modalImgShoes = document.querySelector('.modal-shoes-img-shadow')

//     shoesImg.addEventListener('click', () => {
//         modalImgShoes.classList.add('modal-is-open')
//         shadow.classList.add('shadow')
//         modalImg.classList.remove('is-hidden')
//     })

// }

// // close modal
// const closeModal = () => {
//     const close = document.querySelector('.close-modal');
//     const modalImgShoes = document.querySelector('.modal-shoes-img-shadow')
    
//     close.addEventListener('click', () => {
//         modalImgShoes.classList.remove('modal-is-open')
//         shadow.classList.remove('shadow')
//         modalImg.classList.add('is-hidden')
//     })
// }

// // Add to cart 

const addItem = () => {

    const newPrice = document.querySelector('.cart__info__price__item').textContent;
    const nameItem = document.querySelector('.cart__info__title').textContent;

    const modalItem = document.querySelector('.navigation__tools__modal-items__item');
    const emptyCart = document.querySelector('.navigation__tools__modal-items__empty');
    const modalBtn = document.querySelector('.navigation__tools__modal-btn');

    let items = 0
    const newNumber = parseInt(newPrice).toFixed(2)
    

    // increase price 
    if(countItems === 1 ) {
        items = newNumber
    } else {
        items = (newNumber * countItems).toFixed(2)
    }

    const priceItem = items
    modalItem.innerHTML = `
        <div class="navigation__cart-img-small-size">
            <img src="./images/image-product-1-thumbnail.jpg"/>
        </div>
        <div class="navigation__cart-item-name">
            <h4>${nameItem}</h4>
            <p class="navigation__new-price-cart">$${newPrice}</span><span class="navigation__multiplication">x</span><span class="navigation__items-in-cart">${items}</span><span class="navigation__result">$${priceItem}</span></p>
        </div>
            <p class="navigation__delete">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </p>
        </div> 
    ` ;

    modalBtn.innerHTML = `
        <button>Checkout</button>
    `

    if(addToCart){
        countProducts.classList.remove('is-hidden')
        countProducts.innerHTML = 
        `
            <p class="navigation__svg-item-is-full">${itemInCart}</p>
        `
    } 


    const multiplication = document.querySelector('.navigation__multiplication');
    const itemsInCart = document.querySelector('.navigation__items-in-cart');


    if(countItems < 1) {
        multiplication.textContent = '';
        itemsInCart.textContent = '';
    } else {
        itemsInCart.textContent = countItems
    }
       
    
    if(modalItem.innerHTML !== '') {
        emptyCart.classList.add('is-hidden')
    }

    // delete item from cart 
    const deleteFromCart = document.querySelector('.navigation__delete');
    
    deleteFromCart.addEventListener('click', () => {
        if(modalItem != '') {
            modalItem.textContent = '';
            emptyCart.classList.remove('is-hidden')
            modalBtn.textContent = ''
            countProducts.classList.add('is-hidden')
        }

    })
}

const addToCart = () => {
    addToCartItem.addEventListener('click', addItem)
}

const init = () => {
    openModal();
    widgets();
    // openModalPictures();
    // closeModal();
    addToCart();
}

init();