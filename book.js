const searchBtn =() => {
  const searchField = document.getElementById('searchField');
  const searchFieldValue = searchField.value;   
  searchField.value = ""

  const newDiv = document.getElementById('resultDiv');
  if(searchFieldValue == ""){
    newDiv.innerHTML = ""
    newDiv.innerHTML= `<p class="emptySearchBox">Please search a book name</p>`
  }

  else{
    // resultDiv
  newDiv.innerHTML = ""
  //  Loading id
  const loading = document.getElementById('loading');
  loading.style.display = 'block'
  console.log(searchFieldValue)
  // Found Result
  const lengthDiv = document.getElementById('length');
  lengthDiv.innerHTML = ""

const url =`https://openlibrary.org/search.json?q=${searchFieldValue}`
fetch(url)
.then(res => res.json())
.then(data => allRelatedBooks (data?.docs))

const allRelatedBooks = (books) =>{
  //  console.log(books.docs)
   const newDiv = document.getElementById('resultDiv');
   newDiv.innerHTML = ""

   if(!books){
    newDiv.innerHTML=`<p>Sorry, no data found</p>`
  }

  else{
    books?.forEach(book => {
      console.log(book)
          
    lengthDiv.innerHTML = `<p>Search result: ${Object.keys(book).length}</p>`
         const para = document.createElement('p')
         para.classList.add("card2")
         para.innerHTML = `
         <div class="col card1">
         <div class="card mt-5">
            <div class="card3"> 
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">    
            </div>
             <div class="card-body">
               <h5 class="card-title">${book.title_suggest}</h5>
               <p class="card-text">${book.author_name[0]?book.author_name[0] :'Not found'}</p>
               <p class="card-text">Fist Publish Date:${book.first_publish_year ? book.first_publish_year : 'Not available'}</p>
             </div>
          </div>
         </div>`
         newDiv.appendChild(para)
         loading.style.display = 'none'
    });
  }
  }
}
  
}