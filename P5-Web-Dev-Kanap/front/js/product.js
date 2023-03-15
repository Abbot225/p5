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
        

        const productName = document.createElement("h3");
        productName.classList.add("productName");
        productName.textContent = product.name;

        const productDescription = document.getElementById('description');
     
        productDescription.textContent = product.description;

       const product

    }
}
