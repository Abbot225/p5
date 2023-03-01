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
         
        const productImage = document.querySelector("#img");
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        itemsSection.appendChild(productImage);
    }
}