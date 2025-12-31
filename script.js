// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if(bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active');
//     })
// }
// if(close){
//     close.addEventListener('click',()=>{
//         nav.classList.close('active');
//     })
// }



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


const products = [
    { id: 1, name: "Cartoon Astronaut T-Shirt", price: "₹749", image: "img/f1.jpg" },
    { id: 2, name: "Terra Cotta Corduroy Overshirt", price: "₹499", image: "img/f2.jpg" },
    { id: 3, name: "Galaxy Explorer Graphic Tee", price: "₹549", image: "img/f3.jpg" },
    { id: 4, name: "Astronaut Graphic T-Shirt", price: "₹499", image: "img/f4.jpg" },
    { id: 5, name: "Vibrant Wave Resort Shirt", price: "₹699", image: "img/f5.jpg" },
    { id: 6, name: "Geometric Sun-Daze Shirt", price: "₹499", image: "img/f6.jpg" },
    { id: 7, name: "Oatmeal Relaxed-Fit Pants", price: "₹399", image: "img/f7.jpg" },
    { id: 8, name: "Sage Linen Crop Top", price: "₹479", image: "img/f8.jpg" },

    { id: 9, name: "Kaleidoscope Resort Shirt", price: "₹349", image: "img/n1.jpg" },
    { id: 10, name: "Midnight Rose Button-Up", price: "₹459", image: "img/n2.jpg" }
];


function openProduct(id, event) {
   
    if (event.target.closest('.cart')) return;

    window.location.href = `sproduct.html?id=${id}`;
}

