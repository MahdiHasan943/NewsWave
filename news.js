const loadCategories = async () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCategoreis(data.data.news_category))
    .catch((error) => console.log(error));
};
const displayCategoreis = (category) => {
  const div = document.getElementById("categories");

  category.map((item, index) => {
    const a = document.createElement("div");
    a.classList.add("navText");

    a.innerHTML = `
         <a onClick="loadCategorisItems('${item.category_id}')">
         ${item.category_name}</a>
        `;
    div.appendChild(a);
  });
};

const loadCategorisItems = async (category) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayCategoriesItems(data.data))
    .catch((error) => console.log(error));
};
const displayCategoriesItems = (categoriesItems) => {
  const newsItemsDiv = document.getElementById("newsItems");
  newsItemsDiv.innerHTML = "";
  const itemFound = document.getElementById("item-found");
  itemFound.innerHTML = `
    <span>${categoriesItems.length}</span>
   
    `;

  if (categoriesItems.length === 0) {
    const error = document.getElementById("error");

    error.innerText = `
          News are not available 
        `;
  }

  categoriesItems.map((item, index) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("newsCard");

    div.innerHTML = `
             
          <div className="">
          <img src="${item.thumbnail_url}" class="" alt="...">

          </div>
          <div className="">
            <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.details.slice(0, 500) + "..."}</p>
          
          <div className="cartDesign  ">
          <img class='profile d-inline' src="${item.author.img}" alt="...">
          
          <p class="d-inline">${item.author.name}</p>
          
          <p class="d-inline">${item.author.published_date}</p>
          <p class="d-inline">${item.total_view}</p>
           
          
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>
          
          <i class="fa-regular fa-star d-inline"></i>
         
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>

             

         <div class="d-inline">
         <span class="p-3" data-bs-toggle="modal" data-bs-target="#exampleModal" "><i class="p-3 fa-solid fa-arrow-right"></i></span>
         </div>

          </div>
          </div>
          
        `;

    newsItemsDiv.appendChild(div);
  });
};

loadCategorisItems("01");

loadCategories();
