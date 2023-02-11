const products = [
    {
        "colors": [
        "Black/Yellow",
        "Black/Red"
        ],
        "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
        "name": "Kanap Cyllène",
        "price": 4499,
        "imageUrl": "http://127.0.0.1:3000/images/kanap02.jpeg",
        "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
        "altTxt": "Photo of a yellow and black sofa, four seats"
        },
        {
        "colors": [
        "Green",
        "Red",
        "Orange"
        ],
        "_id": "055743915a544fde83cfdfc904935ee7",
        "name": "Kanap Calycé",
        "price": 3199,
        "imageUrl": "http://127.0.0.1:3000/images/kanap03.jpeg",
        "description": "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
        "altTxt": "Photo of a green angle sofa, three seats"
        },
        {
        "colors": [
        "Pink",
        "White"
        ],
        "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
        "name": "Kanap Autonoé",
        "price": 1499,
        "imageUrl": "http://127.0.0.1:3000/images/kanap04.jpeg",
        "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
        "altTxt": "Photo of a pink sofa, one to two seats"
        },
        {
        "colors": [
        "Grey",
        "Purple",
        "Blue"
        ],
        "_id": "8906dfda133f4c20a9d0e34f18adcf06",
        "name": "Kanap Eurydomé",
        "price": 2249,
        "imageUrl": "http://127.0.0.1:3000/images/kanap05.jpeg",
        "description": "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
        "altTxt": "Photo of a gray sofa, three seats"
        },
        {
        "colors": [
        "Grey",
        "Navy"
        ],
        "_id": "77711f0e466b4ddf953f677d30b0efc9",
        "name": "Kanap Hélicé",
        "price": 999,
        "imageUrl": "http://127.0.0.1:3000/images/kanap06.jpeg",
        "description": "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
        "altTxt": "Photo of a gray sofa, two seats"
        },
        {
        "colors": [
        "Red",
        "Silver"
        ],
        "_id": "034707184e8e4eefb46400b5a3774b5f",
        "name": "Kanap Thyoné",
        "price": 1999,
        "imageUrl": "http://127.0.0.1:3000/images/kanap07.jpeg",
        "description": "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
        "altTxt": "Photo of a red sofa, two seats"
        },
        {
        "colors": [
        "Pink",
        "Brown",
        "Yellow",
        "White"
        ],
        "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
        "name": "Kanap orthosie",
        "price": 3999,
        "imageUrl": "http://127.0.0.1:3000/images/kanap08.jpeg",
        "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
        "altTxt": "Photo of a pink sofa, three seats"
        }

];

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


          





