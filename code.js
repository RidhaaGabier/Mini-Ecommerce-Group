let products = [
   
    {
      id : 1,
     image: "https://i.postimg.cc/X79vj2MY/Prod-1.jpg" ,
      size:   3,
      desc: "Green Tea Essentials.",
      price: "R350",
      button:"Buy now"
    },
    {
      id : 2,
      image: "https://i.postimg.cc/PqXJF1Rr/Prod-2.jpg" ,
      size:   3,
      desc: "Vitamin C Serum.",
      price: "R650",
      button:"Buy now"
    },
    {
      id : 3,
      image: "https://i.postimg.cc/NMLMQBt3/Prod-3.png" ,
      size:  3,
      desc: "Super Hydrating Gel.",
      price: "R850",
      button:"Buy now"
    },
    { 
      id : 4,
      image: "https://i.postimg.cc/h4fMh50g/Prod-4.png" ,
      size:  3,
      desc: "Rice Water Toner.",
      price: "R800",
      button:"Buy now"
    },
    { 
      id : 5,
      image: "https://i.postimg.cc/zXhjFHMc/Prod-5.jpg" ,
      size: 3,
      desc: "Facial Scrub.",
      price: "R450",
      button:"Buy now"
    },
    { 
      id : 6,
      image: "https://i.postimg.cc/V659rJn4/Prod-6.jpg" ,
      size: 3,
      desc: "Hydrating Lip Balm.",
      price: "R350",
      button:"Buy now"
    },
    {
      id : 7,
      image: "https://i.postimg.cc/fLLx1Vbm/Prod-7.jpg" ,
      size: 3,
      desc: "Rejuvenating Eye Cream.",
      price: "R300",
      button:"Buy now"
    },
    {
      id : 8,
      image: "https://i.postimg.cc/4x6bcCM7/Prod-8.jpg" ,
      size: 3,
      desc: "Body Butter.",
      price: "R500",
      button:"Buy now"
    },     
  ];

let disProducts = document.querySelector(".products .row");
products.forEach((product) => {
  disProducts.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-${product.size} my-4">
      <div class="card">
          <img src=${product.image} class="card-img-top" style="padding: 0.6rem;" height="450" alt="...">
          <div class="card-body">
          <h5 class="card-title">𝑩.𝑽</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-product" onclick="addToCart(${product.id})">Buy Now</button>
          </div>
      </div>
  </div>`
});