const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')


let apiRequest = new XMLHttpRequest();

apiRequest.open('GET', 'http://127.0.0.1:3000/api/products/'+id);
//apiRequest.send();

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
        
       
       
    }
}


displaycart()
function displaycart(){
    let cartJson =localStorage.getItem('cart');
    let cart = JSON.parse(cartJson);
    


    if(!cart ){
        cart =[]
    } 

   

    const itemsSection = document.querySelector("#cart__items");
    
    cart.forEach((product) =>{
        const productLink = document.createElement("a");
        productLink.href = "./product.html?id=" + product.id;
        const linktext = document.createTextNode(product.id);
        productLink.appendChild(linktext);

        itemsSection.appendChild(productLink);
    

const item= `
        <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photo of a sofa">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Name of the product</h2>
                    <p>${product.color}</p>
                    <p>${product.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Delete</p>
                    </div>
                  </div>
                </div>
                `
                productLink.innerHTML = item;

    });



  
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartcount").innerHTML = localStorage.getItem("cart");

    // document.querySelectorAll('#cartcount').innerHTML(productNumbers);
}
