const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
  
    const id = e.target.dataset.id;
    if(id === id){
        //remove active from other buttons
        btns.forEach(function(btn){
            // remove the active state from each btns
            btn.classList.remove('active');
            // add active to each btn you click on which is your target
            e.target.classList.add('active');
        });
        // hide other articles
       articles.forEach(function(article){
            article.classList.remove('active');
        });
      
        // the getElementById(id) method get the id from the
        //  dataset e.g history get history which then add active
        //  to history that was initial display:none that correspond to each article and add a active state to it
        const element = document.getElementById(id)
        element.classList.add('active')
          console.log(element)
    }

})