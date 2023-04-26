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
            updateCart()
            console.log('add to cart');
         })
        
        //const itemQuantity = document.getElementById('quantity')
       // itemQuantity.addEventListener ('click',() => {
       //     cartNumbers('')
        //    console.log('number of articles (1-100)');
       //  })
       
        
       
    }
}



function updateCart(){
    let cartJson =localStorage.getItem('cart');
    let cart = JSON.parse(cartJson);
    


    if(!cart ){
        cart =[]
    } 

    var update=false

    
    
    cart.forEach((i) =>{
        if(i.id===id && i.color=== document.getElementById('colors').value){
            let q= parseInt(  document.getElementById('quantity').value )+parseInt( i.quantity);
            i.quantity=q; 
            update  =true
        }
    });

    let item = {
        id:id,
        color:document.getElementById('colors').value,
        quantity:document.getElementById('quantity').value,
        
    
    }

    const cartCount = document.getElementById('cartcount');{
    cartCount.style.display = 'none';
}
  
   

    if(!update){
        
        cart.push(item) 
    }


  
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartcount").innerHTML = localStorage.getItem("cart");

    // document.querySelectorAll('#cartcount').innerHTML(productNumbers);
}







   