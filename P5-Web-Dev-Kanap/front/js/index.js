for (let i = 0; i < 5; i++) {
    console.log(i)
  

    const s=document.getElementById("items")
    const a=document.createElement("a")
    a.setAttribute('href', "./product.html?id=42");
    const article=document.createElement("article")
    const img=document.createElement("img")

    img.setAttribute('src', "../images/kanap02.jpeg ");
    img.setAttribute('alt', "lorem");
    const h3=document.createElement("h3")
    h3.classList.add("productName")
    const t=document.createTextNode("hello world "+i)
    const p=document.createElement("p")
    p.classList.add("productDescription")
    const d=document.createTextNode("dis enim")



    s.appendChild(a)
    a.appendChild(article)
    article.appendChild(img)
    article.appendChild(h3)
    h3.appendChild(t)
    article.appendChild(p)
    p.appendChild(d)
}











          





//fetch ()
// let myImage = document.querySelector('img');

// myImage.onclick = function(){
//     let mySrc = myImage.getAttribute('src')
//     if(mySrc=== "images/logo.png")
//     {
//     myImage.setAttribute('src', "images/kanap01.png");
//     }
//     else
//     {
    

//         {
//             myImage.setAttribute('src',"images/logo.png")
//         }
//     }
// }