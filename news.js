
const loadCategories =async () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data=>displayCategoreis(data.data.news_category))
        .catch(error=>console.log(error))
}
const displayCategoreis = (category) => {

    const div = document.getElementById('categories')
    
    category.forEach(item => {
        const a = document.createElement('div');
        a.classList.add('navText')
        a.innerText = `
         ${item.category_name}
        `
        div.appendChild(a)

    })
    
}
loadCategories()