const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

console.log(id);

let apiRequest = new XMLHttpRequest();

apiRequest.open('GET', 'http://127.0.0.1:3000/api/products/'+id);
apiRequest.send();

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {

        const product = JSON.parse(apiRequest.response);
        console.log(product);
         
        const productImage = document.getElementById('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        

        const productName = document.getElementById('title');
        productName.innerHTML = product.name;

        const productDescription = document.getElementById('description');
        productDescription.textContent = product.description;

        const productPrix = document.getElementById('price');
        productPrix.textContent = product.price;

        const productColors = document.getElementById('colors');
       
        product.colors.forEach( color => {
            var option= document.createElement("option")
            option.text=color
            productColors.add(option);
        });
        
        const addButton = document.getElementById('addToCart')
        addButton.addEventListener ('click',() => {
                        console.log('add to cart');
            })
        
        
       
        
       
    }
}

function cartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('')
    }
}