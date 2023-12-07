// const sliders = document.getElementById('#carusel');
const sliders = document.querySelectorAll('.slide')
const left = document.querySelector('.slide-preview'),
    right = document.querySelector('.slide-next');

let currentIndex = 0;

right.addEventListener('click',() => {
    currentIndex++;
    if(currentIndex > sliders.length-1){
        currentIndex = 0;
    };

    slide(currentIndex);
});
left.addEventListener('click',() => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = sliders.length-1;
    };

    slide(currentIndex);
});


function slide(index) {
    left.disabled = right.disabled = true;
    const parent = document.querySelector('.slider');

    parent.style.transform = `translateX(-${(400 * index) / sliders.length }%)`;
    setTimeout(()=> {
        left.disabled = right.disabled = false;
        console.log(true);
    },parseFloat(getComputedStyle(parent).transitionDuration) * 1000 ) + 10;
};






const searchBtn = document.querySelector('.search'),
    searchPole = document.querySelector('.search-pole'),
    searchInput = document.querySelector('.searchinput'),
    facebook = document.querySelector('.facebook'),
    language = document.querySelector('.language'),
    searchSvg = document.querySelector('.searchSvg'),
    dumaloq = document.querySelector('.dumaloq');
searchBtn.addEventListener('click',()=>{
    if(searchPole.style.display === 'flex'){
        searchPole.style.display = 'none'
        searchInput.style.display = 'none';
        facebook.style.height = '55px'
        language.style.opacity = '1'
    } else{
        searchPole.style.display = 'flex'
        searchPole.style.width = '440px'
        searchInput.style.display ='flex'
        facebook.style.height = '40px'
        language.style.opacity = '0'
    }
})
// dumaloq.addEventListener('click',()=>{
//     if(searchPole.style.display === 'flex'){
//         searchPole.style.display = 'none'
//         searchInput.style.display = 'none';
//         facebook.style.height = '55px'
//         language.style.opacity = '1'
//     } else{
//         searchPole.style.display = 'flex'
//         searchPole.style.width = '440px'
//         searchInput.style.display ='flex'
//         facebook.style.height = '40px'
//         language.style.opacity = '0'
//     }
// })
const lanBtn = document.querySelector('.lan-btn'),
    lanMenu = document.querySelector('.menu'),
    svg = document.querySelector('.lan-svg');
function lanChange(){
    if(lanMenu.style.display === 'flex'){
        lanMenu.style.display = 'none'
        svg.style.transform = 'rotate(1turn)'
    } else{
        lanMenu.style.display = 'flex'
        svg.style.transform = 'rotate(0.5turn)'
    }
}



const lanImg = document.querySelector('.lan-img'),
    lanGap = document.querySelector('.lanGapp');
const menuBir = document.querySelector('.menuBir'),
    menuIki = document.querySelector('.menuIki'),
    menuUch = document.querySelector('.menuUch')
const menubirImg = document.getElementById('menubirImg'),
    menubirGap = document.getElementById('menubirGap'),
    menuikiImg = document.getElementById('menuikiImg'),
    menuikiGap = document.getElementById('menuikiGap'),
    menuuchImg = document.getElementById('menuuchImg'),
    menuuchGap = document.getElementById('menuuchGap');
menuBir.addEventListener('click', ()=>{
    lanImg.innerHTML = '/img/language-russian.png'
    lanGap.innerHTML = "Русский"
    lanMenu.style.display = 'none'
    svg.style.transform = 'rotate(1turn)'
})
menuIki.addEventListener('click', ()=>{
    lanImg.innerHTML = '/img/language-english.png';
    lanGap.innerHTML = "English";
    lanMenu.style.display = 'none'
    svg.style.transform = 'rotate(1turn)'
})
menuUch.addEventListener('click', ()=>{
    lanImg.innerHTML = '/img/language-uzbek.png';
    lanGap.innerHTML = "Uzbek";
    lanMenu.style.display = 'none'
    svg.style.transform = 'rotate(1turn)'
})





const call = document.querySelector('.call');
call.addEventListener('click', ()=>{
    alert("Rostan ham telefon qilmoqchimisiz?")
})




const menuu = document.querySelector('.menuu');
    menuList = document.querySelector('.menu-list'),
    menImg = document.querySelector('.menImg');


menuu.addEventListener('click', () =>{
    menuList.style.left = '0px'
    menImg.addEventListener('click', () =>{
        menuList.style.left = '-900px'
    })
})












