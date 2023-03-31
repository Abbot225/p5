for(let i=0; i< carts.length; i++){
    carts[i].addEventListener ('click',() => {

    })
}

function cartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1),;
        document.querySelector('')
    }
}