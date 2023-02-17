let apiRequest = new XMLHttpRequest();

apiRequest.open('GET', 'http://127.0.0.1:3000/api/products');
apiRequest.send();

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {

        const products = JSON.parse(apiRequest.response);

        const itemsSection = document.querySelector("#items");

        products.forEach(product => {
            const productLink = document.createElement("a");
            productLink.href = "./product.html?id=" + product._id;

            const productArticle = document.createElement("article");

            const productImage = document.createElement("img");
            productImage.src = product.imageUrl;
            productImage.alt = product.name;

            const productName = document.createElement("h3");
            productName.classList.add("productName");
            productName.textContent = product.name;

            const productDescription = document.createElement("p");
            productDescription.classList.add("productDescription");
            productDescription.textContent = product.description;

            productArticle.appendChild(productImage);
            productArticle.appendChild(productName);
            productArticle.appendChild(productDescription);

            productLink.appendChild(productArticle);

            itemsSection.appendChild(productLink);
        });
    }
};