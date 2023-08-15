
let products = JSON.parse(localStorage.getItem('products')) || [
   
    {
      id: 1,
      image: "https://i.postimg.cc/1tFfwxmV/Prod-2.jpg" ,
      size:   3,
      desc: "Super Balm Moisture",
      price: "R800",
      button:"Buy now"
    },
    {
      id: 2,
      image: "https://i.postimg.cc/j5SMSXt1/Prod-3.jpg" ,
      size:   3,
      desc: "Hydra Cleanser.",
      price: "R450",
      button:"Buy now"
    },
    {
      id: 3,
      image: "https://i.postimg.cc/XJPk762Z/Prods-1.jpg" ,
      size:  3,
      desc: "Moisture Body Balm.",
      price: "R800",
      button:"Buy now"
    },
    { 
      id: 4,
      image: "https://i.postimg.cc/K4S7Brhx/Prods-4.png" ,
      size: 3,
      desc: "Spot Remover",
      price: "R550",
      button:"Buy now"
    },
    { 
      id: 5,
      image: "https://i.postimg.cc/GmjN39vH/Prods-5.png" ,
      size: 3,
      desc: "Skin Lighten Mask.",
      price: "R200",
      button:"Buy now"
    },
    { 
      id: 6,
      image: "https://i.postimg.cc/BvYVDyY3/Prods-6.jpg" ,
      size: 3,
      desc: "SPF80 Sun Screen.",
      price: "R650",
      button:"Buy now"
    },
    {
      id: 7,
      image: "https://i.postimg.cc/hvxykGS4/Prods-7.jpg" ,
      size: 3,
      desc: "Green Tea Silk Skin.",
      price: "R500",
      button:"Buy now"
    },
    {
      id: 8,
        image: "https://i.postimg.cc/TPwkR0R4/Prods-8.jpg" ,
        size: 3,
        desc: "hydrochloric acid + BHA.",
        price: "R1000",
        button:"Buy now"
      },
      {
        id: 9,
        image: "https://i.postimg.cc/pXsG33vF/Prod-3.png" ,
        size:  4,
        desc: "Supper Moisture.",
        price: "R800",
        button:"Buy now"
      },
      {
        id: 10,
        image: "https://i.postimg.cc/4x6bcCM7/Prod-8.jpg" ,
        size:  4,
        desc: "Body Butter.",
        price: "R500",
        button:"Buy now"
      },
      {
        id: 11,
        image: "https://i.postimg.cc/fLLx1Vbm/Prod-7.jpg" ,
        size:  4,
        desc: "Eye Balm.",
        price: "R600",
        button:"Buy now"
      },
  
  ];
  
  let disProducts = document.querySelector(".products .row");
  products.forEach((product) => {
  disProducts.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-${product.size} my-4">
      <div class="card">
          <img src=${product.image} class="card-img-top" style="padding: 0.6rem;" height="450">
          <div class="card-body">
          <h5 class="card-title">R&G</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-product" onclick="addToCart(${product.id})">Buy Now</button>
          </div>
      </div>
  </div>`
  });
  
  
  
  // Data for cart 
  
  
  // cart functions
  
  // local storage stuff - first initializing the cart as either an empty array or an array of books as retrieved from local storage
  loadCart();
  
  // allows the book to be added to cart if the quantity is more than 0, the quantity will be decreased by one if it's added to the cart
  
  
  
  // Filter
  
  