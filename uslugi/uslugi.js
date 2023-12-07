const news = document.getElementById('news'),
    aksiya = document.getElementById('aksiya');
const newsProduts = document.querySelector('.newsProductss'),
    aksiyaProduct = document.querySelector('.aksiya');
const mainPage = document.getElementById('mainPage')

news.addEventListener('click', ()=>{
    news.style.background = '#0D4C93';
    news.style.color = 'white';
    newsProduts.style.display ='grid';
    aksiya.style.background = '#F9F9F9'
    aksiya.style.color = '#5A5A5A';
    aksiyaProduct.style.display ='none';
})
aksiya.addEventListener('click', ()=>{
    aksiya.style.background = '#0D4C93'
    aksiya.style.color = 'white';
    aksiyaProduct.style.display ='grid';
    news.style.background = '#F9F9F9';
    news.style.color = '#5A5A5A';
    newsProduts.style.display ='none';
})
const brendBtn = document.querySelector('.brendss'),
    brendList = document.querySelector('.brend'),
    brendSvg = document.querySelector('.brendSvg'),
    smNavParent = document.querySelector('.smNav');
brendBtn.addEventListener('click',()=>{
    brendSvg.classList.toggle('brendSvgrot')
    if(brendList.style.display === 'flex'){
        brendList.style.display = 'none';
    } else{
        brendList.style.display = 'flex'
    }
})
const lab = document.getElementById('lab'),
    xir = document.getElementById('xir'),
    bio = document.getElementById('bio')
const labarotor = document.querySelector('.labarotor'),
    xirur = document.querySelector('.xirur'),
    bioximiya = document.querySelector('.bioximiya'),
    text = document.getElementById('btnText');
lab.addEventListener('click', ()=>{
    labarotor.style.display = 'grid';
    bioximiya.style.display = 'none'
    xirur.style.display = 'none'
    brendSvg.classList.toggle('brendSvgrot')
    brendList.style.display = 'none '
    text.innerHTML = "Лабораторная диагностика"
})
xir.addEventListener('click', ()=>{
    labarotor.style.display = 'none';
    bioximiya.style.display = 'none'
    xirur.style.display = 'grid'
    brendSvg.classList.toggle('brendSvgrot')
    brendList.style.display = 'none '
    text.innerHTML = "Эндоваскулярная хирургия";
})
bio.addEventListener('click', ()=>{
    labarotor.style.display = 'none';
    bioximiya.style.display = 'grid'
    xirur.style.display = 'none'
    brendSvg.classList.toggle('brendSvgrot')
    brendList.style.display = 'none '
    text.innerHTML = "Биохимические анализаторы";
})
const usluga = document.querySelector('.second-child'),
    product = document.querySelector('.products'),
    newaAksiya = document.querySelector('.news');
const mainPageBtn = document.getElementById('mainPagee'),
    aboutBtn = document.getElementById('aboutt'),
    productBtn = document.getElementById('product'),
    uslugaBtn = document.getElementById('uslugaBtn'),
    newaAksiyaBtn = document.getElementById('newaAksiya'),
    obratBtn = document.getElementById('obrat');

aboutBtn.addEventListener('click', ()=>{
    about.style.display = 'flex'
    obrat.style.display ='none'
    newaAksiya.style.display = 'none'
    product.style.display = 'none'
    usluga.style.display = 'none'
    aboutBtn.style.color = '#00C9C9'
    aboutBtn.style.background = 'whitesmoke'
    aboutBtn.style.border = '1px solid white'
    uslugaBtn.style.color = '#0D4C93'
    uslugaBtn.style.background = 'white'
    uslugaBtn.style.border = 'none'
    newaAksiyaBtn.style.color = '#0D4C93'
    newaAksiyaBtn.style.background = 'white'
    newaAksiyaBtn.style.border = 'none'
    productBtn.style.color = '#0D4C93'
    productBtn.style.background = 'white'
    productBtn.style.border = 'none'
    mainPageBtn.style.color = '#0D4C93'
    mainPageBtn.style.background = 'white'
    mainPageBtn.style.border = 'none'
    obratBtn.style.color = '#0D4C93'
    obratBtn.style.background = 'white'
    obratBtn.style.border = 'none'
})
productBtn.addEventListener('click', ()=>{
        product.style.display = 'flex'
        usluga.style.display = 'none'
        newaAksiya.style.display = 'none'
        productBtn.style.color = '#00C9C9'
        productBtn.style.background = 'whitesmoke'
        productBtn.style.border = '1px solid white'
        uslugaBtn.style.color = '#0D4C93'
        uslugaBtn.style.background = 'white'
        uslugaBtn.style.border = 'none'
        newaAksiyaBtn.style.color = '#0D4C93'
        newaAksiyaBtn.style.background = 'white'
        newaAksiyaBtn.style.border = 'none'
        aboutBtn.style.color = '#0D4C93'
        aboutBtn.style.background = 'white'
        aboutBtn.style.border = 'none'
        mainPageBtn.style.color = '#0D4C93'
        mainPageBtn.style.background = 'white'
        mainPageBtn.style.border = 'none'
        obratBtn.style.color = '#0D4C93'
        obratBtn.style.background = 'white'
        obratBtn.style.border = 'none'
})
uslugaBtn.addEventListener('click', ()=>{
    usluga.style.display = 'flex'
    newaAksiya.style.display = 'none'
    product.style.display = 'none'
    uslugaBtn.style.color = '#00C9C9'
    uslugaBtn.style.background = 'whitesmoke'
    uslugaBtn.style.border = '1px solid white'
    productBtn.style.color = '#0D4C93'
    productBtn.style.background = 'white'
    productBtn.style.border = 'none'
    newaAksiyaBtn.style.color = '#0D4C93'
    newaAksiyaBtn.style.background = 'white'
    newaAksiyaBtn.style.border = 'none'
    aboutBtn.style.color = '#0D4C93'
    aboutBtn.style.background = 'white'
    aboutBtn.style.border = 'none'
    mainPageBtn.style.color = '#0D4C93'
    mainPageBtn.style.background = 'white'
    mainPageBtn.style.border = 'none'
    obratBtn.style.color = '#0D4C93'
    obratBtn.style.background = 'white'
    obratBtn.style.border = 'none'
})
newaAksiyaBtn.addEventListener('click', ()=>{
    newaAksiya.style.display = 'flex'
    product.style.display = 'none'
    usluga.style.display = 'none'
    newaAksiyaBtn.style.color = '#00C9C9'
    newaAksiyaBtn.style.background = 'whitesmoke'
    newaAksiyaBtn.style.border = '1px solid white'
    uslugaBtn.style.color = '#0D4C93'
    uslugaBtn.style.background = 'white'
    uslugaBtn.style.border = 'none'
    productBtn.style.color = '#0D4C93'
    productBtn.style.background = 'white'
    productBtn.style.border = 'none'
    aboutBtn.style.color = '#0D4C93'
    aboutBtn.style.background = 'white'
    aboutBtn.style.border = 'none'
    mainPageBtn.style.color = '#0D4C93'
    mainPageBtn.style.background = 'white'
    mainPageBtn.style.border = 'none'
    obratBtn.style.color = '#0D4C93'
    obratBtn.style.background = 'whites'
    obratBtn.style.border = 'none'
})
obratBtn.addEventListener('click', ()=>{
    newaAksiya.style.display = 'none'
    product.style.display = 'none'
    usluga.style.display = 'none'
    obratBtn.style.color = '#00C9C9'
    obratBtn.style.background = 'whitesmoke'
    obratBtn.style.border = '1px solid white'
    uslugaBtn.style.color = '#0D4C93'
    uslugaBtn.style.background = 'white'
    uslugaBtn.style.border = 'none'
    productBtn.style.color = '#0D4C93'
    productBtn.style.background = 'white'
    productBtn.style.border = 'none'
    newaAksiyaBtn.style.color = '#0D4C93'
    newaAksiyaBtn.style.background = 'white'
    newaAksiyaBtn.style.border = 'none'
    aboutBtn.style.color = '#0D4C93'
    aboutBtn.style.background = 'white'
    aboutBtn.style.border = 'none'
    mainPageBtn.style.color = '#0D4C93'
    mainPageBtn.style.background = 'white'
    mainPageBtn.style.border = 'none'
})
const call = document.querySelector('.call'),
    futCall = document.querySelector('.futCall');
call.addEventListener('click', ()=>{
    alert("Rostan ham telefon qilmoqchimisiz?")
})
futCall.addEventListener('click', ()=>{
    alert("Rostan ham telefon qilmoqchimisiz?")
})
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





const menuu = document.querySelector('.menuu');
    menuList = document.querySelector('.menu-list'),
    menImg = document.querySelector('.menImg');


menuu.addEventListener('click', () =>{
    menuList.style.left = '0px'
    menImg.addEventListener('click', () =>{
        menuList.style.left = '-900px'
    })
})



const menProduct = document.querySelector('.menProduct'),
    menUslug =document.querySelector('.menUslug'),
    menNews = document.querySelector('.menNews'),
    menObrat = document.querySelector('.menObrat');

menProduct.addEventListener('click', () =>{
    menuList.style.left = '-900px';
    product.style.display = 'flex'
    usluga.style.display = 'none'
    newaAksiya.style.display = 'none'
    menProduct.style.color = '#00C9C9'
    menUslug.style.color = 'black'
    menNews.style.color = 'black'
    menObrat.style.color = 'black'
})
menUslug.addEventListener('click', () =>{
    menuList.style.left = '-900px';
    product.style.display = 'none'
    usluga.style.display = 'flex'
    newaAksiya.style.display = 'none'
    menUslug.style.color = '#00C9C9'
    menProduct.style.color = 'black'
    menNews.style.color = 'black'
    menObrat.style.color = 'black'
})
menNews.addEventListener('click', () =>{
    menuList.style.left = '-900px';
    product.style.display = 'none'
    usluga.style.display = 'none'
    newaAksiya.style.display = 'flex'
    menNews.style.color = '#00C9C9'
    menProduct.style.color = 'black'
    menUslug.style.color = 'black'
    menObrat.style.color = 'black'
})
menObrat.addEventListener('click', () =>{
    menuList.style.left = '-900px';
    product.style.display = 'none'
    usluga.style.display = 'none'
    newaAksiya.style.display = 'none'
    obrat.style.display = 'flex'
    menObrat.style.color = '#00C9C9'
    menProduct.style.color = 'black'
    menUslug.style.color = 'black'
    menNews.style.color = 'black'
})