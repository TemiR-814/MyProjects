let js = document.querySelector('.js')
let basket = document.querySelector('.basket')
let feedback = document.querySelector('.feedback')
let headerMenu__openBasket = document.querySelector('.headerMenu__openBasket')
let basket__close = document.querySelector('.basket__close')
const sliderLineItems = document.querySelectorAll('.feedback__slider-lineItem');
const sliderLine = document.querySelector('.feedback__slider-line'); 
const slideWidth = 700; 

// let close_merchKardBasket = document.querySelectorAll('.merchKard__closeButton')
let merchKard_basket = document.querySelector('.merchKard_basket')
const merch_cards = [
    {
        image: './photo/merchKard1.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '25 ₽/шт'
    },

    {
        image: './photo/merchKard2.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '32 ₽/шт'
    },

    {
        image: './photo/merchKard3.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '15 ₽/шт'
    },

    {
        image: './photo/merchKard1.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '25 ₽/шт'
    },

    {
        image: './photo/merchKard2.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '32 ₽/шт'
    },

    {
        image: './photo/merchKard3.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '15 ₽/шт'
    },

    {
        image: './photo/merchKard1.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '25 ₽/шт'
    },

    {
        image: './photo/merchKard2.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '32 ₽/шт'
    },

    {
        image: './photo/merchKard3.svg',
        cardName: 'Кирпич рядовой полнотелый',
        price: '15 ₽/шт'
    }

]

merch_cards.forEach(card => {
    const merchCard = document.createElement('div')
    merchCard.classList.add('merchKard')

    const image = document.createElement('img')
    image.classList.add('merchKard1_img')
    image.src = card.image

    const merchName = document.createElement('h3')
    merchName.classList.add('merchKard_text1')
    merchName.textContent = card.cardName

    const merchPrice = document.createElement('p')
    merchPrice.classList.add('merchKard_text3')
    merchPrice.textContent = card.price

    const merch_moreDetails = document.createElement('p')
    merch_moreDetails.classList.add('merchKard_text2')
    merch_moreDetails.textContent = 'подробнее'

    const merchKard__openButton = document.createElement('button')
    merchKard__openButton.classList.add('merchKard__openButton')
    merchKard__openButton.textContent = 'В корзину'

    merchKard__openButton.addEventListener('click', () => {
        AddToBasket(card)
    })

    merch_moreDetails.addEventListener('click', () => {
        ShowDetails(card)
    })
    

    js.appendChild(merchCard)
    merchCard.appendChild(image)
    merchCard.appendChild(merchName)
    merchCard.appendChild(merchPrice)
    merchCard.appendChild(merch_moreDetails)
    merchCard.appendChild(merchKard__openButton)
})

function AddToBasket(card) {
    const basket_card = document.createElement('div')
    basket_card.classList.add('basket_card')

    const product_image = document.createElement('img')
    product_image.classList.add('basket_productImage')
    product_image.src = card.image

    const product_name = document.createElement('p')
    product_name.classList.add('basket_productName')
    product_name.textContent = card.cardName
    
    const product_price = document.createElement('p')
    product_price.classList.add('basket_productPrice')
    product_price.textContent = card.price

    const basket_deleteProduct = document.createElement('img')
    basket_deleteProduct.classList.add('basket_deleteProduct')
    basket_deleteProduct.src = './photo/trash-outline.svg'

    const product_counter_container = document.createElement('div')
    product_counter_container.classList.add('product_counter_container')

    const product_dicrement_100 = document.createElement('button')
    product_dicrement_100.classList.add('product_dicrement_100')
    product_dicrement_100.textContent = '-100'

    const product_dicrement = document.createElement('button')
    product_dicrement.classList.add('product_dicrement')
    product_dicrement.textContent = '-'

    const product_value = document.createElement('p')
    product_value.classList.add('product_value')
    product_value.textContent = 1

    const product_increment = document.createElement('button')
    product_increment.classList.add('product_increment')
    product_increment.textContent = '+'

    const product_increment_100 = document.createElement('button')
    product_increment_100.classList.add('product_increment_100')
    product_increment_100.textContent = '+100'

    product_increment.addEventListener('click', () => {
        product_value.textContent ++ 
    })

    product_increment_100.addEventListener('click', () => {
        product_value.textContent = parseInt(product_value.textContent || 0) + 100
    })

    product_dicrement.addEventListener('click', () => {
        -- product_value.textContent
        if (product_value.textContent < 0) {
            product_value.textContent = 0
        }
    })

    product_increment_100.addEventListener('click', () => {
        product_value.textContent = parseInt(product_value.textContent || 0) - 100
        if (product_value.textContent < 0) {
            product_value.textContent = 0
        }
    })

    basket_deleteProduct.addEventListener('click', () => {
        basket_card.remove()
    })






    basket.appendChild(basket_card) 
    basket_card.appendChild(product_image)
    basket_card.appendChild(product_name)
    basket_card.appendChild(product_price)
    basket_card.appendChild(product_counter_container)
    // product_counter_container.appendChild(product_dicrement_100)
    product_counter_container.appendChild(product_dicrement)
    product_counter_container.appendChild(product_value)
    product_counter_container.appendChild(product_increment)
    // product_counter_container.appendChild(product_increment_100)
    basket_card.appendChild(basket_deleteProduct)
}

headerMenu__openBasket.addEventListener('click', () => {
    basket.style.display = 'block'
    headerMenu__openBasket.style.display = 'none'
})

basket__close.addEventListener('click', () => {
    basket.style.display = 'none'
    headerMenu__openBasket.style.display = 'block'
})

function ShowDetails(card) {
    const popup_close = document.createElement('button')
    popup_close.classList.add('js__merchCardDetails_close')
    popup_close.textContent = 'Закрыть'

    const popup = document.createElement('div')
    popup.classList.add('js__merchCardDetails')

    const popup_image = document.createElement('img')
    popup_image.classList.add('js__merchCardDetails_img')
    popup_image.src = card.image

    const popup_name = document.createElement('h3')
    popup_name.classList.add('merchKard_Text1')
    popup_name.textContent = card.cardName

    const popup_price = document.createElement('p')
    popup_price.classList.add('merchKard_Text3')
    popup_price.textContent = card.price
    
    const popup_inf = document.createElement('p')
    popup_inf.classList.add('js__merchCardDetails_inf')
    popup_close.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'




    js.appendChild(popup)
    popup.appendChild(popup_image)
    popup.appendChild(popup_name)
    popup.appendChild(popup_price)
    popup.appendChild(popup_close)
    popup.appendChild(popup_inf)


    popup_close.addEventListener('click', () => {
        CloseDetails(popup)
    })
}

function CloseDetails(popup) {
    popup.remove()
}







// close_merchKardBasket.addEventListener('click', function(){
//     merchKard_basket.classList.add('merchKard_basket__hide')
//     merchKard_basket.classList.remove('merchKard_basket__show')
//     setTimeout(function(){
//         merchKard_basket.style.display = "none"
//     }, 800)
// })

let activeIndex = 2;
offset = -1400 + (activeIndex * slideWidth);

function setActiveSlide(index) {
    for (let i = 0; i < sliderLineItems.length; i++) {
        sliderLineItems[i].classList.remove('active');
        sliderLineItems[i].style.transform = 'scale(1)';
    }

    activeIndex = index;

    sliderLineItems[activeIndex].classList.add('active');
    sliderLineItems[activeIndex].style.transform = 'scale(1.25)';

    let sliderWidth = document.querySelector('.feedback__slider').offsetWidth;
    let activeSlideWidth = document.querySelector('.feedback__slider-lineItem').offsetWidth;
    let offset = -((activeIndex * (slideWidth + 200)) - (sliderWidth / 2) + (activeSlideWidth / 2));  // в этой строке (slideWidth + 100) это ширина слайдера + расстояние между слайдами. Изменяя CSS не забудь заменить и здесь значения
    sliderLine.style.left = offset + 'px';

    sliderLineItems[activeIndex].style.transition = 'transform 0.3s';
}

setActiveSlide(activeIndex);

document.querySelector('.feedback__slider-next').addEventListener('click', function(){
    activeIndex = (activeIndex + 1) % sliderLineItems.length;
    setActiveSlide(activeIndex);
});

document.querySelector('.feedback__slider-prev').addEventListener('click', function () {
    activeIndex = (activeIndex + sliderLineItems.length - 1) % sliderLineItems.length;
    setActiveSlide(activeIndex);
});