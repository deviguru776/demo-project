     const data = [
       {
         id: 1,
         name: "FRONTECH",
         img: "https://m.media-amazon.com/images/I/71hA2W-6jhL._SX522_.jpg",
         amt: 14999,
         seller: "Nuevotech Industries Private Limited",
         category: "Monitors"
       },
       {
         id: 2,
         name: "Samsung",
         img: "https://m.media-amazon.com/images/I/716I+4U6sYL._SX522_.jpg",
         amt: 15999,
         seller: "Clicktech Retail Private Ltd",
         category: "Monitors"
       },
       {
         id: 3,
         name: "Smartwatch",
         img: "https://m.media-amazon.com/images/I/51rW3mp1PoL._SL1100_.jpg",
         amt: 6999,
         seller: "Matrix International",
         category: "Watch"
       },
       {
         id: 4,
         name: "Fossil Watch",
         img: "https://m.media-amazon.com/images/I/710RKMDIJaL._SL1500_.jpg",
         amt: 2799,
         seller: "Cambium Retail",
         category: "Watch"
       },
       {
         id: 5,
         name: "Pad Pro",
         img: "https://m.media-amazon.com/images/I/71xy1+l2DkL._SL1500_.jpg",
         amt: 41999,
         seller: "Clicktech Retail Private Ltd",
         category: "Tab"
       },
       {
         id: 6,
         name: "Samsung Galaxy Tab",
         img: "https://m.media-amazon.com/images/I/61Fq8OoYQvL._SL1500_.jpg",
         amt: 32337,
         seller: "Clicktech Retail Private Ltd",
         category: "Tab"
       },
       {
         id: 7,
         name: "Samsung Galaxy Z Flip6 5G",
         img: "https://m.media-amazon.com/images/I/61Hhrr0bFWL._SL1500_.jpg",
         amt: 80999,
         seller: "Kushi Mobile World",
         category: "Mobile"
       },
       {
         id: 8,
         name: "iPhone 15 Plus",
         img: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
         amt: 79999,
         seller: "Kushi Mobile World",
         category: "Mobile"
       }
     ];
   
     const productsContainer = document.querySelector(".products");
     const categoryList = document.querySelector(".category-list");
   
     function displayProducts(products) {
       const product_details = products.map((product) =>
         `<div class="product">
           <div class="img">
             <img src="${product.img}" alt="${product.name}"/>
           </div>
           <div class="product-details">
             <span class="name">${product.name}</span>
             <span class="amt">Rs.${product.amt}</span>
             <span class="seller">${product.seller}</span>
           </div>
         </div>`
       ).join("");
   
       productsContainer.innerHTML = product_details;
     }
   
     function setCategories() {
       const allCategories = data.map((product) => product.category);
     //   console.log(allCategories);
   
       const categories = [
         "All",
         ...allCategories.filter((category, index) => {
           return allCategories.indexOf(category) === index;
         }),
       ];
   
     //   console.log(categories);
   
       categoryList.innerHTML = categories.map((category) =>
         `<li>${category}</li>`
       ).join("");
     }

     categoryList.addEventListener("click",(event) => {
          const selectedCategory = event.target.textContent;
          selectedCategory === "All" ? displayProducts(data) : displayProducts(data.filter((products) => products.category == selectedCategory));
     });

     const priceValue = document.querySelector(".priceValue");
     const priceRange = document.querySelector("#priceRange");
           
       function setPrice() {
        const priceList = data.map((product) => product.amt);
        const minPrice = Math.min(...priceList);
        const maxPrice = Math.max(...priceList);
        priceRange.min = minPrice;
        priceRange.max = maxPrice;
        priceValue.textContent = "Rs." + maxPrice;

        priceRange.addEventListener("input", (e) => {
          priceValue.textContent = "Rs." + e.target.value;
          displayProducts(data.filter((product) => product.amt <= e.target.value));
        

       });
      }

      const txtSearch = document.querySelector("#txtSearch");
      txtSearch.addEventListener("keyup", (event)=> {
        const value = event.target.value.toLowerCase().trim();
          
        if(value){
          displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
        }
        else{
          displayProducts(data)
        }

      })


     displayProducts(data);
     setCategories();
     setPrice();

   


