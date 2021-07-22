//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header')
        mainHeader.onclick = function (){
            mainHeader.style.color = 'blue'
            mainHeader.innerText = 'mon-year'
    }


//b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul')
for ( let uls of ul){
    uls.style.width = '400px'
}
//c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList')
for (linkLists of linkList){
    linkLists.style.width = '50%'
}
//d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2')
for (listElements2 of listElement2){
    console.log(listElements2.innerText)
}
//e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li')
for (allLis of allLi){
    allLis.style.background = 'gray'
}
//f) отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a')
for (allAs of allA){
    allAs.classList.add('anchor')
}
//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (allAs2 of allA){
    if (allAs2 === allA[2]){
        allAs2.style.fontSize = '40px'
    }
}
//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let allAs3 of allA){
    allAs3.classList.add('element_XXX')

}
//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header')
    for (subHeaders of subHeader){
        subHeaders.style.background = prompt()
    }
//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let subHeaders2 of subHeader){
    if (subHeaders2 === subHeader[1]){
        subHeaders2.style.color = prompt()
    }
}
//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1')
content1[0].innerText = prompt()

//l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p')
for (ps of p){
    ps.style.padding = '20px'
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let monYear = document.getElementsByClassName('text2')
for (monYears of monYear){
    monYears.innerText = 'mon-year'
}
