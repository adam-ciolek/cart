
// const imgS = document.querySelectorAll('.shoes-img-small img');
// const imgB = document.querySelector('.shoes-img')

// slider first page
// const imgsBiggest = 
// [
//     {id: 0, img:'images/image-product-1.jpg'},
//     {id: 1, img:'images/image-product-2.jpg'},
//     {id: 2, img:'images/image-product-3.jpg'},
//     {id: 3, img:'images/image-product-4.jpg'},
// ]

// imgS.forEach( img => {
//     img.addEventListener("click", e =>{
    
//         const targetDataSet = e.target.dataset.set

//         imgS.forEach(item => {
//             item.classList.remove('is-active-focus')
//         })

//         imgsBiggest.find( el => {
//              if(el.id == targetDataSet) {
//                 imgB.src = el.img 
//                 img.classList.add('is-active-focus')
//             }
//         });  
//     });
// });

// slide in shadow page 

// const imgSShadow = document.querySelectorAll('.shoes-img-small-shadow img');
// const imgBShadow = document.querySelector('.shoes-img-shadow');

// const arrowLeft = document.querySelector('.previous');
// const arrowRight = document.querySelector('.next');
 

// const imgsBiggestShadow = 
// [
//     {id: 4, img:'images/image-product-1.jpg'},
//     {id: 5, img:'images/image-product-2.jpg'},
//     {id: 6, img:'images/image-product-3.jpg'},
//     {id: 7, img:'images/image-product-4.jpg'},
// ]

// imgSShadow.forEach( img => {
//     img.addEventListener("click", e =>{
    
//         const targetDataSet = e.target.dataset.set

//         imgSShadow.forEach(item => {
//             item.classList.remove('is-active-focus')
//         })

//         imgsBiggestShadow.find( el => {
//              if(el.id == targetDataSet) {
//                 imgBShadow.src = el.img 
//                 img.classList.add('is-active-focus')
//             }
//         });  
//     });
// });


// let countImg = imgsBiggestShadow.length;
// let stopSliding = false

// const handleArrowLeft = () => {

//     stopSliding= true
//     if(stopSliding){ 
        
//         let changeImg = '' 
        
//         if(countImg >= 5) {
//             countImg--
//             stopSliding = false
//             imgsBiggestShadow.forEach( img => {
//                 if(countImg == img.id) {
//                     changeImg = img.img   
//                 }
//             })       
//         } else {
//             imgsBiggestShadow.forEach( img => {
//                 if(countImg == img.id) {
//                     changeImg = img.img   
//                 }
//             })
//         }    
//         imgBShadow.src = changeImg
//     }
//     console.log(countImg)
// }

// const handleArrowRight = () => {

//     stopSliding= true
    
//     if(stopSliding){ 
//         let changeImg = '' 
//         if(countImg >= 7) {
//             stopSliding = false
//             imgsBiggestShadow.forEach( img => {
//                 if(countImg == img.id) {
//                     changeImg = img.img   
//                 }
//             })       
//         } else {
//             countImg++
//             imgsBiggestShadow.forEach( img => {
//                 if(countImg == img.id) {
//                      changeImg = img.img   
//                 }
//             })
//         }    
//         imgBShadow.src = changeImg
//     }
// }

// arrowLeft.addEventListener('click', handleArrowLeft);
// arrowRight.addEventListener('click', handleArrowRight);