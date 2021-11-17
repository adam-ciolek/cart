
const imgS = document.querySelectorAll('.shoes-img-small img');
const imgB = document.querySelector('.shoes-img')
 

// slider first page
imgS.forEach( img => {
    img.addEventListener('click', e => {
        const target = e.target.dataset.set

        switch (target) {
            case '0': 
                img.classList.add('is-active-focus')
                imgB.src= "images/image-product-1.jpg"
            break;
            case '1':  
                imgB.src="images/image-product-2.jpg"
            break;
            case '2':
                imgB.src="images/image-product-3.jpg"
            break;
            case '3':
                imgB.src="images/image-product-4.jpg"
            break;
        }
    })

})













