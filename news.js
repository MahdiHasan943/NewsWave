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

    categoriesItems.sort((p1, p2) => (p2.total_view > p1.total_view) ? 1 : (p2.total_view < p1.total_view) ? -1 : 0);



  categoriesItems.map((item, index) => {
    // console.log(item);

    
    const div = document.createElement("div");
    div.classList.add("newsCard");

    div.innerHTML = `
             
          <div className="mt-5">
          <img  src="${item.thumbnail_url}" class="main-image" alt="...">

          </div>
          <div className="">
            <h5 class="title">${item.title}</h5>
            <p class="des">${item.details.slice(0, 500) + "..."}</p>
          
          <div class="cartDesign  ">
         <div class ="d-flex align-items-center gap-2">
         <img class='profile d-inline' src="${item.author.img}" alt="...">
         <div class="d-inline">
         <p class="author-name">${item.author.name} </p>
         <p class="date d-inline">${item.author.published_date}</p>

         </div>
         </div>
          
          


            <div className="">
            <svg class='svg'  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="carbon:view">
            <path id="Vector" d="M23.8717 11.745C22.9896 9.46324 21.4582 7.48996 19.4668 6.06906C17.4754 4.64817 15.1113 3.84193 12.6667 3.75C10.2221 3.84193 7.85798 4.64817 5.86659 6.06906C3.8752 7.48996 2.34381 9.46324 1.46169 11.745C1.40211 11.9098 1.40211 12.0902 1.46169 12.255C2.34381 14.5368 3.8752 16.51 5.86659 17.9309C7.85798 19.3518 10.2221 20.1581 12.6667 20.25C15.1113 20.1581 17.4754 19.3518 19.4668 17.9309C21.4582 16.51 22.9896 14.5368 23.8717 12.255C23.9313 12.0902 23.9313 11.9098 23.8717 11.745ZM12.6667 18.75C8.69169 18.75 4.49169 15.8025 2.96919 12C4.49169 8.1975 8.69169 5.25 12.6667 5.25C16.6417 5.25 20.8417 8.1975 22.3642 12C20.8417 15.8025 16.6417 18.75 12.6667 18.75Z" fill="#515151"/>
            <path id="Vector_2" d="M12.6667 7.5C11.7767 7.5 10.9066 7.76392 10.1666 8.25839C9.4266 8.75285 8.84982 9.45566 8.50923 10.2779C8.16864 11.1002 8.07952 12.005 8.25315 12.8779C8.42679 13.7508 8.85537 14.5526 9.48471 15.182C10.114 15.8113 10.9159 16.2399 11.7888 16.4135C12.6617 16.5872 13.5665 16.4981 14.3888 16.1575C15.211 15.8169 15.9138 15.2401 16.4083 14.5001C16.9028 13.76 17.1667 12.89 17.1667 12C17.1667 10.8065 16.6926 9.66193 15.8487 8.81802C15.0048 7.97411 13.8602 7.5 12.6667 7.5ZM12.6667 15C12.0733 15 11.4933 14.8241 11 14.4944C10.5066 14.1648 10.1221 13.6962 9.89505 13.148C9.66799 12.5999 9.60858 11.9967 9.72433 11.4147C9.84009 10.8328 10.1258 10.2982 10.5454 9.87868C10.9649 9.45912 11.4995 9.1734 12.0814 9.05764C12.6634 8.94189 13.2666 9.0013 13.8147 9.22836C14.3629 9.45542 14.8315 9.83994 15.1611 10.3333C15.4907 10.8266 15.6667 11.4067 15.6667 12C15.6667 12.7956 15.3506 13.5587 14.788 14.1213C14.2254 14.6839 13.4623 15 12.6667 15Z" fill="#515151"/>
            </g>
            </svg>
                        <p class="view d-inline">${item.total_view}</p>


            </div>           
           <div class="">
           
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>
          
          <i class="fa-regular fa-star d-inline"></i>
         
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>

           </div>
             

         <div class="d-inline">
         <span class="p-3" onClick="loadNewsDEtails('${item._id}')"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="arrow p-3 fa-solid fa-arrow-right"></i></span>
         </div>

          </div>
          </div>
          
        `;

    newsItemsDiv.appendChild(div);
  });
};




const loadNewsDEtails = async (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/${id}`)
  .then((res) => res.json())
  .then((data) => displaNewsDetails(data.data))
  .catch((error) => console.log(error));

}

const displaNewsDetails = (details) => {
  
  const modal = document.getElementById('m-body')
  modal.innerHTML=''
  details.map((item, index) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("newsCard");

    div.innerHTML = `
             
           <div className="">
           <img class="img-fluid" src="${item.image_url}" />

           <h5 class="title">${item.title}</h5>
           <p class="des">${item.details.slice(0, 500) + "..."}</p>



           <div class="cartDesign  ">
         <div class ="d-flex align-items-center gap-2">
         <img class='profile d-inline' src="${item.author.img}" alt="...">
         <div class="d-inline">
         <p class="author-name">${item.author.name} </p>
         <p class="date d-inline">${item.author?.published_date}</p>

         </div>
         </div>
          
          


            <div className="">
            <svg class='svg'  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="carbon:view">
            <path id="Vector" d="M23.8717 11.745C22.9896 9.46324 21.4582 7.48996 19.4668 6.06906C17.4754 4.64817 15.1113 3.84193 12.6667 3.75C10.2221 3.84193 7.85798 4.64817 5.86659 6.06906C3.8752 7.48996 2.34381 9.46324 1.46169 11.745C1.40211 11.9098 1.40211 12.0902 1.46169 12.255C2.34381 14.5368 3.8752 16.51 5.86659 17.9309C7.85798 19.3518 10.2221 20.1581 12.6667 20.25C15.1113 20.1581 17.4754 19.3518 19.4668 17.9309C21.4582 16.51 22.9896 14.5368 23.8717 12.255C23.9313 12.0902 23.9313 11.9098 23.8717 11.745ZM12.6667 18.75C8.69169 18.75 4.49169 15.8025 2.96919 12C4.49169 8.1975 8.69169 5.25 12.6667 5.25C16.6417 5.25 20.8417 8.1975 22.3642 12C20.8417 15.8025 16.6417 18.75 12.6667 18.75Z" fill="#515151"/>
            <path id="Vector_2" d="M12.6667 7.5C11.7767 7.5 10.9066 7.76392 10.1666 8.25839C9.4266 8.75285 8.84982 9.45566 8.50923 10.2779C8.16864 11.1002 8.07952 12.005 8.25315 12.8779C8.42679 13.7508 8.85537 14.5526 9.48471 15.182C10.114 15.8113 10.9159 16.2399 11.7888 16.4135C12.6617 16.5872 13.5665 16.4981 14.3888 16.1575C15.211 15.8169 15.9138 15.2401 16.4083 14.5001C16.9028 13.76 17.1667 12.89 17.1667 12C17.1667 10.8065 16.6926 9.66193 15.8487 8.81802C15.0048 7.97411 13.8602 7.5 12.6667 7.5ZM12.6667 15C12.0733 15 11.4933 14.8241 11 14.4944C10.5066 14.1648 10.1221 13.6962 9.89505 13.148C9.66799 12.5999 9.60858 11.9967 9.72433 11.4147C9.84009 10.8328 10.1258 10.2982 10.5454 9.87868C10.9649 9.45912 11.4995 9.1734 12.0814 9.05764C12.6634 8.94189 13.2666 9.0013 13.8147 9.22836C14.3629 9.45542 14.8315 9.83994 15.1611 10.3333C15.4907 10.8266 15.6667 11.4067 15.6667 12C15.6667 12.7956 15.3506 13.5587 14.788 14.1213C14.2254 14.6839 13.4623 15 12.6667 15Z" fill="#515151"/>
            </g>
            </svg>
                        <p class="view d-inline">${item.total_view}</p>


            </div>           
           <div class="">
           
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>
          
          <i class="fa-regular fa-star d-inline"></i>
         
          <i class="fa-regular fa-star d-inline"></i>
          <i class="fa-regular fa-star d-inline"></i>

           </div>
             

           
           </div>
        `;
    
    modal.appendChild(div)

  })



}




loadCategorisItems("01");

loadCategories();
