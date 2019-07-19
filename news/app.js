let dailynews = document.getElementById("dailynews")
let articleDiv = document.getElementById("articleDiv")
let btnsource = document.getElementById("sourceDiv")

let articleList = news.articles.map(article=> {

    let articleList =`<div>
    <label>${article.author}<label>
    <label>${article.title}<label>
    <a href='${article.url}'>link<a>
  <img src='${article.urlToImage}><img>
    <label>${article.publishedAt}<label>
    
    <div>`
    return articleList
}) 
articleDiv.innerHTML = articleList.join('')


sourceDiv.addEventListener('click', function(){
    console.log("sourceDiv")
})


let btnSource =[];
