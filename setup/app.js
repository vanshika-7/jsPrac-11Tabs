const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
  const id = e.target.dataset.id;
  
  if (id){
    // remove active from other or all btns and then adding to the one clicked 
    btns.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    })
    // remove active from other or all articles and then adding to the one clicked 
    articles.forEach(function(article){
      article.classList.remove("active");
      if (article.id == id){
        article.classList.add("active");

      }
    })
  }
})
